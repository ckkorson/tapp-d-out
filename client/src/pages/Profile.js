import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_TABS } from "../utils/queries";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
const Profilepic = require("../resources/images/profile.jpg");

function Profile() {
  const { data } = useQuery(QUERY_ME);
  const { data: allTabs } = useQuery(QUERY_TABS);
  const user = data?.me || {};
  const tabs = allTabs?.tabs || [];
  const drinks = tabs[0]?.drinks || [];
  const TabTotal = (drinks) => {
    let total = 0;
    for(let i = 0; i < drinks.length; i++) {
        total = total + parseInt(drinks[i].price)
    }
    return total
  }
  const totaller = TabTotal(drinks);

  if (tabs.length === 0) {
    return (
      <div className="gradient-custom-2" style={{ backgroundColor: "#999" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#333", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src={Profilepic}
                      alt="Cheers"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">{user.name}</MDBTypography>
                    <MDBCardText>{user.username}</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">
                        {drinks.length}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        # How many have I had tonight
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">
                        {tabs.length}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        # of Epic Nights with Tapp-D-Out
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <MDBCardText>Let's Start a New Tab</MDBCardText>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#999" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#333", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={Profilepic}
                    alt="Cheers"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{user.name}</MDBTypography>
                  <MDBCardText>{user.username}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      {drinks.length}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      # How many have I had tonight
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{tabs.length}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      # of Epic Nights with Tapp-D-Out
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">
                    {tabs[0].description} at {tabs[0].location}
                  </p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    {drinks &&
                      drinks.map((drink) => (
                        <MDBCardText
                          key={drink._id}
                          className="font-italic mb-1"
                        >
                          {drink.drinkType} for ${drink.price}
                        </MDBCardText>
                      ))}
                    <br></br>
                    <div>
                      <MDBCardText className="mb-1 h5">
                        ${totaller}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        How much have I spent tonight?
                      </MDBCardText>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Profile;

// Photo by <a href="https://unsplash.com/@wilstewart3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wil Stewart</a> on <a href="https://unsplash.com/s/photos/cheers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
