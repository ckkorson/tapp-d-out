import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_SINGLE_TAB, QUERY_TABS } from "../utils/queries";
import Auth from "../utils/auth";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
const Profilepic = require("../resources/images/profile.jpg");

function Profile() {
  // const { username: userParam } = useParams();
  const { data } = useQuery(QUERY_ME);
  const { tabData } = useQuery(QUERY_SINGLE_TAB);
  const { allTabs } = useQuery(QUERY_TABS);
  console.log(allTabs);
  const user = data?.me || data?.user || {};
  const tab = tabData?.tab || {};
  const tabs = allTabs?.tabs || [];
  console.log(user);
  console.log(tabData);
  console.log(tabs);

  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/me" />;
  // }

  // if (data) {
  //   user = data.user;
  // }
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
                  <MDBTypography tag="h5">{user.username}</MDBTypography>
                  <MDBCardText>{user.email}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5"># Not Enough</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Bars Visited
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">
                      # I'll never tell
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Epic Nights
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">
                    {tab.description} at
                    {tab.location}
                  </p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      {/* {tab[0].drinks[0].description[0]} */}for
                      {/* {tab[0].drinks[0].price[0]} */}
                    </MDBCardText>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent tabs
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>Tab Date</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Tab Location
                        </Card.Subtitle>
                        <Card.Text>Tab Details</Card.Text>
                        <Card.Link href="#">View Whole Tab</Card.Link>
                      </Card.Body>
                    </Card>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>Tab Date</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Tab Location
                        </Card.Subtitle>
                        <Card.Text>Tab Details</Card.Text>
                        <Card.Link href="#">View Whole Tab</Card.Link>
                      </Card.Body>
                    </Card>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>Tab Date</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Tab Location
                        </Card.Subtitle>
                        <Card.Text>Tab Details</Card.Text>
                        <Card.Link href="#">View Whole Tab</Card.Link>
                      </Card.Body>
                    </Card>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>Tab Date</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Tab Location
                        </Card.Subtitle>
                        <Card.Text>Tab Details</Card.Text>
                        <Card.Link href="#">View Whole Tab</Card.Link>
                      </Card.Body>
                    </Card>
                  </MDBCol>
                </MDBRow> */}
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
