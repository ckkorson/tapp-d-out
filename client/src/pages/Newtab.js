import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_TAB } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const Newtab = (props) => {
  const [formState, setFormState] = useState({ description: "", location: "" });
  const [addTab] = useMutation(ADD_TAB);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addTab({
      variables: {
        description: formState.description,
        location: formState.location,
      },
    });
    const token = mutationResponse.data.addTab.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { tabData, value } = event.target;
    setFormState({
      ...formState,
      [tabData]: value,
    });
    console.log(tabData);
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
          <h2 className="text-uppercase text-center mb-5">Create a New Tab</h2>
          <form onSubmit={handleFormSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Description"
              size="lg"
              id="form1"
              name="description"
              type="text"
              // value={formState.name}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Location"
              size="lg"
              id="form1"
              name="location"
              type="text"
              // value={formState.username}
              onChange={handleChange}
            />
            <MDBBtn to="/me" className="mb-4 w-100 gradient-custom-4" size="lg">
              Lets Go Drinking!
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Newtab;
