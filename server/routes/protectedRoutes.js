const express = require("express");
const app = express();
const router = express.Router();
const http = require("http");
const authorize = require("../authorize");

const { Server } = require("socket.io");

//generate the server below
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

module.exports = router;
