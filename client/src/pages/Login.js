import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: "#709085" }} />
            <span className="h1 fw-bold mb-0">Tapp-D-Out</span>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4"
          >
            <h3
              className="fw-normal mb-3 ps-5 pb-3"
              style={{ letterSpacing: "1px" }}
            >
              Log in
            </h3>

            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Username"
              id="formControlLg"
              type="name"
              name="username"
              size="lg"
              // value={formState.username}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4 mx-5 w-100"
              label="Password"
              id="formControlLg"
              type="password"
              name="password"
              size="lg"
              // value={formState.password}
              onChange={handleChange}
            />

            <MDBBtn
              to="/me"
              className="mb-4 px-5 mx-5 w-100"
              color="info"
              size="lg"
            >
              Login
            </MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5">
              {/* <a class="text-muted" href="#!">
                Forgot password?
              </a> */}
            </p>
            <p className="ms-5">
              Don't have an account?{" "}
              <Link to="/signup" className="link-info">
                Register here
              </Link>
            </p>
          </form>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F12%2F16035__oldschool_l_0.jpg"
            alt="Login rightside"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
