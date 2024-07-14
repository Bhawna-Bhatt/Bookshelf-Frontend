import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Pic1 from "../images/bookcover.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";

export const BookDetail = () => {
  const location = useLocation();
  const book = location.state;
  const navigate = useNavigate();
  const [disableInput, setDisableInput] = useState(true);
  const [name, setName] = useState(book.title);
  const [genreName, setGenreName] = useState("");
  const [authorName, setAuthorName] = useState("");

  console.log("in book detail", book.bookId);

  //Get data specific to a book using book id passed from previous page
  //using state of useLocation

  useEffect(() => {
    const getBookDetail = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/books/bookauthor/" + book.bookId
        );

        if (!response.ok) {
          throw new Error("Network Response not OK");
        }

        const data = await response.json();
        console.log(data.Author);
        setName(data.title);
        setGenreName(data.Genre.genreName);
        setAuthorName(data.Author.name);
      } catch (err) {
        console.log("Problem with Fetch operation: ", err);
      }
    };
    getBookDetail();
  }, []);

  // Make the Book field editable

  const editBook = () => {
    console.log(!disableInput);

    setDisableInput(!disableInput);
  };

  const saveBook = () => {
    const url = "http://localhost:4000/books/" + book.bookId;
    console.log("in edit handling");
    //put
    //console.log(name, biography);

    // fetch(url, {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     name: name,
    //     biography: biography,
    //   }),
    //   headers: { "Content-type": "application/json; charset=UTF-8" },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("author edited");
    //     alert("Author changed successfully");
    // navigate("/books");
    // })
    // .catch((err) => {
    //   // If the PUT returns an error, ...
    //   console.log(err);
    // });

    // setDisableInput(!disableInput);
  };

  const deleteBook = () => {
    console.log("in delete handle click");
    const url = "http://localhost:4000/books/" + book.bookId;
    // send DELETE request w/ id as part of URL
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // If the DELETE is successful, display a message
        alert("book deleted");
        //navigate("/books");
      })
      .catch((err) => {
        // If the DELETE returns an error, display a message
        alert("Unexpected error.", err);
        console.log(err);
      });
  };

  return (
    <>
      <>
        <NavbarInside></NavbarInside>

        <Container className="p-3 m-3">
          <h4
            className="p-3 m-3 text-center text-decoration-underline"
            style={{ color: "#f64b4b" }}
          >
            Book Details{" "}
          </h4>
          <Row>
            <Col>
              <div className="editcontainer">
                <img src={Pic1} alt="bookpic" />
              </div>
            </Col>
            <Col>
              <Form>
                <Form.Group>
                  <Col>
                    <i className="bi bi-pencil-square h4" onClick={editBook}>
                      <Button
                        onClick={saveBook}
                        className="btn ms-3"
                        style={{ backgroundColor: "#f64b4b" }}
                      >
                        Save
                      </Button>
                    </i>
                    <i className="bi bi-trash h4 ms-3" onClick={deleteBook}></i>
                  </Col>
                </Form.Group>
                <Container
                  style={{ borderStyle: "solid", color: "#f64b4b" }}
                  className="mt-5"
                >
                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="name">
                      <b style={{ color: "#f64b4b" }}>Book Title</b>
                    </Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      placeholder="Book Name"
                      type="text"
                      value={name}
                      disabled={disableInput}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label htmlFor="name">
                      <b style={{ color: "#f64b4b" }}>Author</b>
                    </Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      placeholder="Author Name"
                      type="text"
                      value={authorName}
                      disabled={disableInput}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label htmlFor="name">
                      <b style={{ color: "#f64b4b" }}>Genre </b>
                    </Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      placeholder="Author Name"
                      type="text"
                      value={genreName}
                      disabled={disableInput}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label htmlFor="name">
                      <b style={{ color: "#f64b4b" }}>Publication Date </b>
                    </Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      placeholder="Author Name"
                      type="text"
                      value={book.publicationDate}
                      disabled={disableInput}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2 mb-3">
                    <Form.Label htmlFor="name">
                      <b style={{ color: "#f64b4b" }}>Price </b>
                    </Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      placeholder="Price"
                      type="text"
                      value={book.price}
                      disabled={disableInput}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>{" "}
                </Container>
              </Form>
              <Button
                style={{ background: "#f64b4b", color: "white" }}
                className="btn btn-md mt-4 "
                onClick={() => {
                  navigate("/books");
                }}
              >
                back
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};
