import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import PostLoginData from "./PostLoginData";
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const LoginForm = (props) => {
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
    const result = await PostLoginData(userData);
    if (result) {
      props.onLogin(true);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-5"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Welcome</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  {...register("email", {
                    required: "Email is required.",
                  })}
                />
                {errors.email && (
                  <p className="errorMsg">{errors.email.message}</p>
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
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
                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Login
                </MDBBtn>
                <h5 className="small text-muted">
                  {" "}
                  Don't have an account? <Link to="/register">
                    {" "}
                    Register
                  </Link>{" "}
                </h5>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </form>
  );
};

export default LoginForm;
