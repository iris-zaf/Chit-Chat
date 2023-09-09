import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import PostRegistData from "./PostRegistData";
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import ChatOrange from "./chat-orange.png";
import "../Register/Register.css";
import { AuthContext } from "../../../context/AuthContext";

const RegistrationForm = (props) => {
  const navigate = useNavigate();

  const {
    handleSubmit,

    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    // reset({
    //   name: "",
    //   email: "",
    //   password: "",
    // });

    const res = await PostRegistData(data);
    if (res) {
      props.onRegister(true);
      navigate("/");
    }
  };
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext);
  console.log("registerInfo", registerInfo);
  return (
    <form onSubmit={handleSubmit(() => onSubmit(registerInfo))}>
      {" "}
      <MDBContainer fluid>
        <MDBCard
          className="text-black m-5 loginContainer"
          style={{ borderRadius: "25px" }}
        >
          <MDBCardBody
            style={{ backgroundColor: "white", borderRadius: "1em" }}
          >
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Create an account
                </p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form2"
                    type="text"
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        email: e.target.value,
                      })
                    }
                  />
                  {errors.email && (
                    <p className="errorMsg">{errors.email.message}</p>
                  )}
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Password"
                    id="form3"
                    type="password"
                    onChange={(e) =>
                      updateRegisterInfo({
                        ...registerInfo,
                        password: e.target.value,
                      })
                    }
                  />

                  {errors.password && (
                    <p className="errorMsg">{errors.password.message}</p>
                  )}
                </div>

                <MDBBtn className="mb-4" size="lg" type="submit">
                  Register
                </MDBBtn>
                <h5 className="small text-muted">
                  {" "}
                  Already have an account? <Link to="/login"> Login</Link>{" "}
                </h5>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src={ChatOrange}
                  style={{ borderRadius: "20px" }}
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
};

export default RegistrationForm;
