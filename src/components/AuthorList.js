import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";
import { Footer } from "./Footer";
import { Card, CardBody, CardTitle, Row } from "react-bootstrap";

export const AuthorList = () => {
  const [author, setAuthor] = useState([]);
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

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
        <h2 className="h2 text-center mt-5 pt-5" style={{ color: "#D97448" }}>
          {" "}
          Here are all the Authors with us !!
        </h2>
        <div>
          <Row>
            {author.map((i) => (
              <Card
                style={{
                  width: "16rem",
                }}
                key={i.authorId}
                className="m-4"
              >
                <i className="bi bi-file-person-fill fs-3"></i>

                <CardBody>
                  <Link to={`/authors/${i.authorId}`} state={i}>
                    <CardTitle tag="h5">{i.name}</CardTitle>
                  </Link>
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

//<CardText>Biography :{i.biography}</CardText>
