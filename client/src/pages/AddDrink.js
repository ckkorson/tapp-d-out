import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_DRINK } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_TABS } from "../utils/queries";
import Auth from "../utils/auth";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const AddDrink = (props) => {
  const [formState, setFormState] = useState({ drinkType: "", price: "" });
  const [addDrink] = useMutation(ADD_DRINK);
  const { loading, data: allTabs } = useQuery(QUERY_TABS);
  const tabs = allTabs?.tabs || [];
  console.log(tabs)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const data = await addDrink({
      variables: {
        // drinkType: formState.drinkType,
        // price: formState.price,
        ...formState,
        tabId: tabs[0]._id
      },
    });
    console.log(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  if (loading) {
    return;
    <div>Loading</div>;
  }
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
          <h2 className="text-uppercase text-center mb-5">
            Add a drink to your tab
          </h2>
          <form onSubmit={handleFormSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="What kind of drink are we having?"
              size="lg"
              id="form1"
              name="drinkType"
              type="text"
              // value={formState.name}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="How much does it cost?"
              size="lg"
              id="form1"
              name="price"
              type="Int"
              // value={formState.username}
              onChange={handleChange}
            />
            <MDBBtn
              type="submit"
              className="mb-4 w-100 blue-custom-4"
              size="lg"
            >
              Add Drink
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default AddDrink;
