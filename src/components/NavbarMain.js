import React from "react";
import "../../src/App.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarMain = () => {
  return (
    <>
      <header id="header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <NavLink to="/homepage">
              <Navbar.Brand href="#home">
                <i class="bi bi-book-half m-2"></i>
                BookShelf
              </Navbar.Brand>
            </NavLink>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
