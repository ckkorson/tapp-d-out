import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/me">Tapp-D-Out</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/me">Profile</Nav.Link>
            <Nav.Link href="/newtab">Create New Tab</Nav.Link>
            <Nav.Link href="/newdrink">Add Drink</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
