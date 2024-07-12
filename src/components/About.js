import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pic1 from "../images/People.jpeg";

export const About = () => {
  return (
    <>
      <section id="about" className="block">
        <Container fluid>
          <div className="title-holder">
            <h2>About Us</h2>
          </div>

          <Row>
            <Col sm={4}>
              <img src={Pic1} alt="staff" />{" "}
            </Col>
            <Col sm={4}>
              <h3>Founders</h3>
              The founders of the book inventory management website, Sarah
              Thompson and David Lee, combined their passion for literature with
              a keen understanding of technology to revolutionize how bookstores
              manage their inventory. <br />
              With backgrounds in computer science and library sciences, they
              identified a gap in the market for a user-friendly platform that
              streamlined cataloging and sales processes. <br />
            </Col>
            <Col sm={4}>
              <h3>Tech Stack</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
