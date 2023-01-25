import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../assets/logo.png";

const NavbarComponent = React.memo(() => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand style={{ height: "35px" }}>
          <img
            alt=""
            src={logo1}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Traffic dashboard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
});

export default NavbarComponent;
