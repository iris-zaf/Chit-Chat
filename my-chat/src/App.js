import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/freeComponents/Register/Register";
import Login from "./components/freeComponents/Login/LoginForm";
import Logout from "./components/protectedComponents/logout";
import Nav from "./components/freeComponents/Navbar/Navbar";
import LandingPage from "./components/freeComponents/LandingPage/LandingPage";
import "./App.css";
import ChatEnter from "./components/protectedComponents/ChatEnter";
function App() {
  let token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [loading, setLoading] = useState(false);
  const handleUserState = (state) => {
    setIsLoggedIn(state);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <div className="multi-spinner-container">
            <lottie-player
              src="https://lottie.host/59dd79f3-5804-4425-a16e-8161f2370772/IebCKUpOUS.json"
              background="transparent"
              speed="1"
              style={{
                width: " 8em",
                height: "8em",

                top: "50%",
                left: "50% ",
              }}
              loop
              autoplay
            ></lottie-player>{" "}
          </div>
        </>
      ) : (
        <div>
          <Nav userState={isLoggedIn} />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatEnter />} />
            <Route
              path="/register"
              element={<Register onRegister={handleUserState} />}
            />
            <Route
              path="/login"
              element={<Login onLogin={handleUserState} />}
            />
            <Route
              path="/logout"
              element={<Logout onLogout={handleUserState} />}
            />
            {/* <Route path="*" element={<Navigate   to="/" />} /> */}
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
