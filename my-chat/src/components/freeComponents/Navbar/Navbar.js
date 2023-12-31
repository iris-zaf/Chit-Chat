import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
// import { AnimatedButton } from "../../protectedComponents/AnimatedButton";

const Navbar = ({ userState }) => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [value, setValue] = useState("");
  const options = [
    { name: "owl", value: "🦉" },
    { name: "cat", value: "🦊" },
    { name: "frog", value: "🐸" },
    { name: "tiger", value: "🐅" },
    { name: "dolphin", value: "🐬" },
  ];
  function handleSelect(e) {
    setValue(e.target.value);
  }
  return (
    <>
      {userState ? (
        <MDBNavbar
          expand="lg"
          dark
          bgColor="dark"
          style={{ zIndex: "1000", position: "relative" }}
        >
          <MDBContainer fluid>
            <MDBNavbarBrand to="/" className="m-2 fs-1">
              Chit - Chat
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="m-4">
                  {/* <Link to="/homePage" className="text-light">
                    <AnimatedButton />
                  </Link> */}
                  <h6 style={{ color: "white" }}>Select your avatar</h6>
                  <select onChange={handleSelect}>
                    {options.map((option) => (
                      <option value={option.value}>{option.name}</option>
                    ))}
                  </select>
                </MDBNavbarItem>

                <MDBNavbarItem className="m-4">
                  <Link to="/logout" className="text-light">
                    Logout
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <MDBNavbarItem style={{ listStyle: "none" }}>
                <p>{value}</p>
              </MDBNavbarItem>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      ) : (
        <MDBNavbar expand="lg">
          <MDBContainer fluid>
            <MDBNavbarBrand to="/" className="m-2 fs-1">
              Chit-Chat
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
              <MDBNavbarNav className="me-auto  mb-lg-0">
                <MDBNavbarItem className="m-4">
                  <Link to="/register" className="text-dark">
                    Register
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem className="m-4">
                  <Link to="/login" className="text-dark">
                    Login
                  </Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      )}
    </>
  );
};

export default Navbar;
