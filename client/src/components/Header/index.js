import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Auth from "../../utils/auth";

function Header({ handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/me">Tapp-D-Out</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/me">Profile</Nav.Link>
            <Nav.Link href="/newtab">New Tab</Nav.Link>
            <Nav.Link href="/newdrink">Add Drink</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
