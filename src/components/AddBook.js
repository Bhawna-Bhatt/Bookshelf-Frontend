import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { Navigate, useNavigate } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";
import { Container } from "react-bootstrap";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [GenreGenreId, setGenreGenreId] = useState("");
  const [AuthorAuthorId, setAuthorAuthorId] = useState("");

  const [genreName, setGenreName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  const navigate = useNavigate();

  //get genres

  useEffect(() => {
    const getAllGenres = async () => {
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
      getAllGenres();
    };
  }, []);

  //get authors
  useEffect(() => {
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
    getAllAuthors();
  }, []);

  // add book

  const addBook = () => {
    const url = "http://localhost:4000/books";
    console.log("in addbook handling");
    //post
    //console.log(name, biography);

    fetch(url, {
      method: "POST",
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
        console.log("author added");
        alert("Author added successfully");
        navigate("/books");
      })
      .catch((err) => {
        // If the PUT returns an error, ...
        console.log(err);
      });
  };

  return (
    <>
      <NavbarInside></NavbarInside>
      <h4 className="mt-5 ms-5 p-5" style={{ color: "#f64b4b" }}>
        Would you like to add a Book
        <Button
          style={{ background: "#f64b4b", color: "white" }}
          className="btn btn-md ms-2"
          onClick={() => {
            navigate("/books");
          }}
        >
          back
        </Button>
      </h4>
      <Container
        style={{
          width: "600px",
          borderStyle: "solid",
          color: "#f64b4b",
          borderWidth: "2px",
        }}
        className="mt-3"
      >
        <Form className="container mt-2">
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Title</Form.Label>
            <Form.Control type="text" placeholder="Book Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Author </Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setAuthorName(e.target.value);
              }}
            >
              {" "}
              <option>Please select an author</option>
              {authorList.map((x) => (
                <option value={x.authorId}>{x.name}</option>
              ))}
            </Form.Select>
            <Link to="/authors/new">
              <p className="mt-2">
                {" "}
                Author not in list? Please click here to add
              </p>
            </Link>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Genre</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setGenreName(e.target.value);
              }}
            >
              {" "}
              <option>Please select a genre </option>
              {genreList.map((x) => (
                <option value={x.genreId}>{x.genreName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Link to="/genres">
            <p className="mt-2"> Genre not in list? Please click here to add</p>
          </Link>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Publication Date</Form.Label>
            <Form.Control type="date" placeholder="Author Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Control type="text" placeholder="Price" />
          </Form.Group>

          <Button
            style={{ background: "#f64b4b" }}
            className="mt-3 mb-3"
            onClick={addBook}
          >
            Add Book
          </Button>
        </Form>
      </Container>
    </>
  );
};
