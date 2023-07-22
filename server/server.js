const express = require("express");

const freeRoutes = require("./routes/freeRoutes");
const app = express();
const http = require("http");
const cors = require("cors");
require("./database/connection");

const Port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use("/", freeRoutes);

const { Server } = require("socket.io");

// generate the server below
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    //origin is saying from which http is our server making the calls
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//below the socket io code:
//listening for events in our socket.io

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(Port, () => console.log(`Listening to port ${Port}`));
