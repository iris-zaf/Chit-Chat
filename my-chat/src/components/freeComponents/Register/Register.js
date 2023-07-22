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

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    reset({
      email: "",
      password: "",
    });

    const res = await PostRegistData(userData);
    if (res) {
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Your Email"
                    id="form2"
                    type="email"
                    {...register("email", {
                      required: "Email is required.",
                      minLength: {
                        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      },
                    })}
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
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 6,
                        message: "Password should be at-least 5 characters.",
                      },
                    })}
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
                  You already have an account? <Link to="/login">
                    {" "}
                    Login
                  </Link>{" "}
                </h5>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
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
