import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = React.memo((props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tableau de bord</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="home" className="nav-link">Accueil</Link>
          <Link to="vehicules" className="nav-link">Véhicules</Link>
          <Link to="sensors" className="nav-link">Capteurs</Link>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavbarComponent;
