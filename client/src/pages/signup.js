import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Createacct = () => {
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleFormSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="form1"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              size="lg"
              id="form1"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form4"
              type="password"
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn
              type='submit'
              // href="/me"
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
            >
              Register
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Createacct;
