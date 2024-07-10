import React, { useEffect, useState } from "react";
import { NavbarInside } from "./NavbarInside";
import { Footer } from "./Footer";
import authorImage from "../images/authorImage.jpeg";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Row,
} from "reactstrap";
import { HomeCards } from "./HomeCards";

export const AuthorList = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const getAllAuthors = async () => {
      try {
        const response = await fetch("http://localhost:4000/authors");

        if (!response.ok) {
          throw new Error("Network Response not OK");
        }

        const data = await response.json();
        console.log(data);
        setAuthor(data);
      } catch (err) {
        console.log("Problem with Fetch operation: ", err);
      }
    };
    getAllAuthors();
  }, []);

  return (
    <>
      <NavbarInside></NavbarInside>
      <div className="container">
        <h2 className="h2 text-center mt-4" style={{ color: "#D97448" }}>
          {" "}
          Here are all the Authors with us !!
        </h2>
        <div>
          <Row>
            {author.map((i) => (
              <Card
                style={{
                  width: "18rem",
                }}
                key={i.authorId}
                className="m-1"
              >
                <img
                  alt="Sample"
                  src={authorImage}
                  style={{
                    width: "12rem",
                    height: "15rem",
                  }}
                />
                <CardBody>
                  <CardTitle tag="h5">{i.name}</CardTitle>

                  <CardText>Biography :{i.biography}</CardText>
                  <Button>Author Details</Button>
                </CardBody>
              </Card>
            ))}
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
