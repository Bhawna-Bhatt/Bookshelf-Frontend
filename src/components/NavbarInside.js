import React, { useState } from "react";
import LogoImage from "../Logo.png";
import { NavLink, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Form,
  Row,
  Col,
  FormGroup,
  Button,
  NavbarText,
} from "reactstrap";

export function NavbarInside(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar {...args} color="secondary">
          <NavLink to="/homepage">
            <img src={LogoImage} className="imageStyle"></img>
          </NavLink>

          <Form>
            <Row form="true">
              <Col md={6}>
                <FormGroup>
                  <Input type="text" name="" id="search" placeholder="Search" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Button
                    htmlFor="search"
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      background: "#D97448",
                    }}
                    className="btn-lg "
                  >
                    Search
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar horizontal>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="h4">Books</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <NavLink to="/books">
                    <DropdownItem>All Books</DropdownItem>
                  </NavLink>
                  <DropdownItem divider />
                  <NavLink to="/books/new">
                    <DropdownItem>Add a Book</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="h4">Author</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <NavLink to="/authors">
                    <DropdownItem>All Authors</DropdownItem>
                  </NavLink>
                  <DropdownItem divider />
                  <NavLink to="/authors/new">
                    <DropdownItem>Add an Author</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Link to="/">
              <NavbarText>Log out</NavbarText>
            </Link>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}
