import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/freeComponents/Register/Register";
import Login from "./components/freeComponents/Login/LoginForm";
import Logout from "./components/protectedComponents/logout";
import Nav from "./components/freeComponents/Navbar/Navbar";
import LandingPage from "./components/freeComponents/LandingPage/LandingPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserState = (state) => {
    setIsLoggedIn(state);
  };
  return (
    <div>
      <Nav userState={isLoggedIn} />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/login"
          element={<Login onLogin={handleUserState} />}
        />
        <Route
          exact
          path="/logout"
          element={<Logout onLogout={handleUserState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
