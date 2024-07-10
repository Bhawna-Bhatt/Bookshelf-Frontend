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
} from "reactstrap";
import { HomeCards } from "./HomeCards";
import { Link } from "react-router-dom";

export const BookList = () => {
  const [book, setBook] = useState([]);

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
                <img
                  alt="Sample"
                  src={bookCover}
                  style={{
                    width: "12rem",
                    height: "15rem",
                  }}
                />
                <CardBody>
                  <Link to={`/books/${i.bookId}`} state={i}>
                    <CardTitle tag="h5">{i.title}</CardTitle>
                  </Link>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {i.price}
                  </CardSubtitle>
                  <CardText>
                    Authorid :{i.AuthorAuthorId}
                    Genre:{i.GenreGenreId}
                    {i.publicationDate}
                  </CardText>
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
