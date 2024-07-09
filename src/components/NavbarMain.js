import React from "react";
import "../../src/App.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, NavItem, Navbar } from "reactstrap";
import LogoImage from "../Logo.png";

export const NavbarMain = () => {
  return (
    <>
      <Navbar color="secondary" className="mb-5">
        <Nav justified>
          <NavItem>
            <NavLink to="/">
              <img src={LogoImage} className="imageStyle"></img>
            </NavLink>
            <NavLink to="/">
              <span className="fs-4 fw-bold text-dark">BookShelf</span>
            </NavLink>
          </NavItem>
        </Nav>
        <NavItem>
          <NavLink to="/login">
            <Button
              className="btn btn-lg "
              style={{
                marginTop: "20px",
                backgroundColor: "#D97448",
                color: "black",
              }}
            >
              <span className="h5">Login</span>
            </Button>
          </NavLink>
        </NavItem>
      </Navbar>
    </>
  );
};
