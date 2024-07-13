import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function NavbarInside(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header id="header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <NavLink to="/homepage">
              <Navbar.Brand>
                <i className="bi bi-book-half m-2"></i>
                BookShelf
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/homepage">
                  <p className="h6 fw-bold m-2">Home</p>
                </Nav.Link>

                <NavDropdown
                  title="Books"
                  id="basic-nav-dropdown"
                  className="fw-bold h6 ms-2"
                >
                  <NavDropdown.Item href="/books">All Books</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/books/new">
                    Add a new Book
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Authors"
                  id="basic-nav-dropdown"
                  className="fw-bold h6 ms-2"
                >
                  <NavDropdown.Item href="/authors">
                    All Authors
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/authors/new">
                    Add an Author
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="about">About</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
