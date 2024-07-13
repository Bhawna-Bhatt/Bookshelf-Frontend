import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pic1 from "../images/People.jpeg";

export const About = () => {
  return (
    <>
      <section id="about" className="block">
        <Container>
          <div className="title-holder">
            <h2>About Us</h2>
          </div>

          <Row>
            <Col sm={4}>
              <img src={Pic1} alt="staff" />{" "}
            </Col>
            <Col sm={4}>
              <h3 style={{ marginBottom: "20px" }}>Founders</h3>
              The founders of the book inventory management website,{" "}
              <strong style={{ color: "#f64b4b", marginBottom: "10px" }}>
                Sarah Thompson and David Lee
              </strong>
              , combined their passion for literature with a keen understanding
              of technology to revolutionize how bookstores manage their
              inventory. <br />
              With backgrounds in computer science and library sciences, they
              identified a gap in the market for a user-friendly platform that
              streamlined cataloging and sales processes. <br />
            </Col>
            <Col sm={4}>
              <h3 style={{ marginBottom: "10px" }}>Tech Stack</h3>
              <ul
                style={{ margin: "10px", fontWeight: "bold", color: "#f64b4b" }}
              >
                <li>HTML5</li>
                <li>Javascript/React</li>
                <li>CSS/React-Bootstrap</li>
                <li>Express/Sequelize</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
