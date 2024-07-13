import React, { useEffect, useState } from "react";
import { NavbarInside } from "./NavbarInside";
import { Footer } from "./Footer";
import bookCover from "../images/bookcover.jpeg";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Row,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import { Link } from "react-router-dom";

export const BookList = () => {
  const [book, setBook] = useState([]);
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/books");

        if (!response.ok) {
          throw new Error("Network Response not OK");
        }

        const data = await response.json();
        console.log(data);
        setBook(data);
      } catch (err) {
        console.log("Problem with Fetch operation: ", err);
      }
    };
    getAllBooks();
  }, []);

  return (
    <>
      <NavbarInside></NavbarInside>
      <div className="container" style={{ height: "80vh" }}>
        <h2 className="h2 text-center mt-4" style={{ color: "#D97448" }}>
          {" "}
          Here are all the Books in Inventory
        </h2>
        <div>
          <Row>
            {book.map((i) => (
              <Card
                style={{
                  width: "18rem",
                }}
                key={i.bookId}
                className="m-1"
              >
                <i class="bi bi-book-half fs-3"></i>
                <CardBody style={{ background: "#FA5F55" }}>
                  <Link
                    to={`/books/${i.bookId}`}
                    state={i}
                    style={{ color: "white" }}
                  >
                    <CardTitle tag="h5" style={{ color: "white" }}>
                      {i.title}
                    </CardTitle>
                  </Link>

                  {/* <div>
                    <Accordion open={open} toggle={toggle}>
                      <AccordionItem>
                        <AccordionHeader targetId="1">More...</AccordionHeader>
                        <AccordionBody
                          accordionId="1"
                          style={{ background: "#F2D2BD", color: "#E35335" }}
                        >
                          Author: {i.AuthorAuthorId}
                          <br />
                          Genre : {i.GenreGenreId}
                          <br />
                          Price : {i.price}
                          <br />
                          Publication Date : {i.publicationDate}
                          <br />
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </div> */}
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
