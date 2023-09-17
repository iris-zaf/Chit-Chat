// import UserLogin from "./components/UserLogin";
import "./ChatEnter.css";
import io from "socket.io-client";
import { React, useState } from "react";
import TextSpan from "./TextSpan";
import "./balloons.mp4";
import Chat from "./Chat";

//connecting to our backend
const socket = io("http://localhost:3001");
function ChatEnter() {
  const [user, setAUser] = useState("");
  const [room, setRoom] = useState("");

  //determine if i want to show the chat or not
  const [showChat, setShowChat] = useState(false);
  const sentence = "Chit-Chat".split("");
  function joinRoom() {
    //can here validate the user if he is a valid user (validation-authentication for future work)
    if (user !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  return (
    <div className="App">
      <video loop autoPlay muted id="bg-video">
        <source src={require("./balloons.mp4")} type="video/mp4" />
      </video>
      <div className="content">
        {!showChat ? (
          <div className="joinChatContainer">
            {" "}
            <div className="title">
              {sentence.map((letter, index) => {
                return <TextSpan key={index}>{letter}</TextSpan>;
              })}
            </div>
            <input
              type="text"
              onChange={(e) => setAUser(e.target.value)}
              placeholder="John..."
            ></input>
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join a Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={user} room={room} />
        )}
      </div>
    </div>
  );
}

export default ChatEnter;
