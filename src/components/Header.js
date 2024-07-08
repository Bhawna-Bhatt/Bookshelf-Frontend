import React from "react";
import "../../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Nav, NavItem, NavLink } from "reactstrap";
import LogoImage from "../Logo.png";

export const Header = ({ className }) => {
  console.log(className);
  return (
    <>
      <Nav fill justified pills className="containerStyle">
        <NavItem>
          <NavLink>
            <img src={LogoImage} className="imageStyle"></img>
            <span secondary>Bookstore</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button lg outline="true" secondary>
              Login
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};
