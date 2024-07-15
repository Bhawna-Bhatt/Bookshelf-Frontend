import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import Pic1 from "../images/bookcover.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";

export const BookDetail = () => {
  const location = useLocation();
  const book = location.state;
  const navigate = useNavigate();
  const [disableInput, setDisableInput] = useState(true);
  const [title, setTitle] = useState(book.title);
  const [genreName, setGenreName] = useState("");
  const [authorName, setAuthorName] = useState("");

  const [price, setPrice] = useState(book.price);
  const [publicationDate, setPublicationDate] = useState(book.publicationDate);
  const [GenreGenreId, setGenreGenreId] = useState(0);
  const [AuthorAuthorId, setAuthorAuthorId] = useState(0);

  const [bookDetail, setBookDetail] = useState({});

  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

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

        setBookDetail(data);
        console.log("book details ", data);

        setTitle(data.title);
        setGenreName(data.Genre.genreName);
        setAuthorName(data.Author.name);
        setGenreGenreId(data.GenreGenreId);
        setAuthorAuthorId(data.AuthorAuthorId);
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

  console.log("testing", bookDetail);
  //console.log("1", bookDetail.AuthorAuthorId);
  //console.log("1:", bookDetail.GenreGenreId);
  console.log("G", GenreGenreId);
  console.log("A", AuthorAuthorId);

  const saveBook = () => {
    const url = "http://localhost:4000/books/" + book.bookId;
    console.log("in edit handling");

    setTitle(title);
    setPrice(price);
    setPublicationDate(publicationDate);
    console.log("in save", bookDetail.GenreGenreId);
    console.log("in save", bookDetail.AuthorAuthorId);

    const getGenreId = () => {
      setGenreGenreId(bookDetail.GenreGenreId);
      console.log("2", GenreGenreId);
    };

    const getAuthorId = () => {
      setAuthorAuthorId(bookDetail.AuthorAuthorId);
      console.log("2:", AuthorAuthorId);
    };
    getGenreId();
    getAuthorId();

    // get all genres

    const getAllGenres = async () => {
      console.log("fetching genre");

      try {
        const response = await fetch("http://localhost:4000/genres");

        if (!response.ok) {
          throw new Error("Network Response not OK");
        }

        const data = await response.json();
        console.log(data);

        setGenreList(data);
      } catch (err) {
        console.log("Problem with Fetch operation: ", err);
      }
    };

    // get all authors

    const getAllAuthors = async () => {
      try {
        const response = await fetch("http://localhost:4000/authors");

        if (!response.ok) {
          throw new Error("Network Response not OK");
        }

        const data = await response.json();
        console.log(data);

        setAuthorList(data);
      } catch (err) {
        console.log("Problem with Fetch operation: ", err);
      }
    };

    //put

    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        price: price,
        publicationDate: publicationDate,
        GenreGenreId: GenreGenreId,
        AuthorAuthorId: AuthorAuthorId,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("author edited");
        alert("Author changed successfully");
        navigate("/books");
      })
      .catch((err) => {
        // If the PUT returns an error, ...
        console.log(err);
      });

    setDisableInput(!disableInput);
  };

  const deleteBook = () => {
    console.log("in delete handle click");
    const url = "http://localhost:4000/books/" + book.bookId;
    // send DELETE request w/ id as part of URL
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
      })
      .then((data) => {
        // If the DELETE is successful, display a message
        console.log("data", data);
        setToast(true);
        setToastColor("success");
        setToastMessage("Book is deleted");
        setTimeout(() => {
          navigate("/books");
        }, 2000);
        //navigate("/books");
      })
      .catch((err) => {
        // If the DELETE returns an error, display a message

        setToast(true);
        setToastColor("danger");
        setToastMessage("Some error occurred");
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
                      value={title}
                      disabled={disableInput}
                      onChange={(e) => setTitle(e.target.value)}
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
                      onChange={(e) => setAuthorName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label htmlFor="name">
                      <b style={{ color: "#f64b4b" }}>Genre </b>
                    </Form.Label>
                    <Form.Control
                      id="name"
                      name="name"
                      placeholder="Genre Name"
                      type="text"
                      value={genreName}
                      disabled={disableInput}
                      onChange={(e) => setGenreName(e.target.value)}
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
                      type="date"
                      value={publicationDate}
                      disabled={disableInput}
                      onChange={(e) => setPublicationDate(e.target.value)}
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
                      value={price}
                      disabled={disableInput}
                      onChange={(e) => setPrice(e.target.value)}
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
          <ToastContainer
            position="top-end"
            className="p-3 mt-5"
            style={{ zIndex: 1 }}
          >
            <Toast
              show={toast}
              onClose={() => {
                setToast(false);
              }}
              delay={1500}
              autohide
              position="top-center"
              className="mt-5 text-white"
              bg={toastColor}
            >
              <Toast.Header>
                <strong className="me-auto">Hi There!</strong>
              </Toast.Header>
              <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
          </ToastContainer>
        </Container>
      </>
    </>
  );
};
