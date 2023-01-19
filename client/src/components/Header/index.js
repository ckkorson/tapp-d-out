import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => handlePageChange("Profile")}>
            Tapp-D-Out
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handlePageChange("Profile")}>
              Profile
            </Nav.Link>
            <Nav.Link onClick={() => handlePageChange("Newtab")}>
              Create New Tab
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
