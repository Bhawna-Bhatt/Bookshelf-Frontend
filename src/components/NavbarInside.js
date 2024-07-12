import React, { useState } from "react";
import LogoImage from "../Logo.png";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  Collapse,
  NavbarToggler,
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
      <header id="header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <NavLink to="/homepage">
              <Navbar.Brand href="#home">
                <i class="bi bi-book-half m-2"></i>
                BookShelf
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>

                <NavDropdown title="Books" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#books">All Books</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#addabook">
                    Add a new Book
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Authors" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#authors">
                    All Authors
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#addanauthor">
                    Add an Author
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

//     <>
//       <div>
//         <Navbar {...args} color="secondary">
//           <NavLink to="/homepage">
//             <img src={LogoImage} className="imageStyle"></img>
//           </NavLink>

//           <Form>
//             <Row form="true">
//               <Col md={6}>
//                 <FormGroup>
//                   <Input type="text" name="" id="search" placeholder="Search" />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Button
//                     htmlFor="search"
//                     style={{
//                       fontWeight: "bold",
//                       color: "black",
//                       background: "#D97448",
//                     }}
//                     className="btn-lg "
//                   >
//                     Search
//                   </Button>
//                 </FormGroup>
//               </Col>
//             </Row>
//           </Form>

//           <NavbarToggler onClick={toggle} />
//           <Collapse isOpen={isOpen} navbar horizontal>
//             <Nav className="me-auto" navbar>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   <span className="h4">Books</span>
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <NavLink to="/books">
//                     <DropdownItem>All Books</DropdownItem>
//                   </NavLink>
//                   <DropdownItem divider />
//                   <NavLink to="/books/new">
//                     <DropdownItem>Add a Book</DropdownItem>
//                   </NavLink>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   <span className="h4">Author</span>
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <NavLink to="/authors">
//                     <DropdownItem>All Authors</DropdownItem>
//                   </NavLink>
//                   <DropdownItem divider />
//                   <NavLink to="/authors/new">
//                     <DropdownItem>Add an Author</DropdownItem>
//                   </NavLink>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//             <Link to="/">
//               <NavbarText>Log out</NavbarText>
//             </Link>
//           </Collapse>
//         </Navbar>
//       </div>
//     </>
//   );
// }
