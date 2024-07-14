import React, { useState } from "react";
import { NavbarInside } from "./NavbarInside";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pic1 from "../images/bookcover.jpeg";
import { Container } from "react-bootstrap";

export const AuthorDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const author = location.state;
  const [disableInput, setDisableInput] = useState(true);
  const [name, setName] = useState(author.name);
  const [biography, setBiography] = useState(author.biography);

  console.log("in component", author);

  const editAuthor = () => {
    console.log(!disableInput);

    setDisableInput(false);
  };

  const saveAuthor = () => {
    const url = "http://localhost:4000/authors/" + author.authorId;
    console.log("in edit handling");
    //put
    //console.log(name, biography);

    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        biography: biography,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("author edited");
        alert("Author changed successfully");
        navigate(-1);
      })
      .catch((err) => {
        // If the PUT returns an error, ...
        console.log(err);
      });

    setDisableInput(!disableInput);
  };

  const deleteAuthor = () => {
    console.log("in delete handle click");
    const url = "http://localhost:4000/authors/" + author.authorId;
    // send DELETE request w/ id as part of URL
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // If the DELETE is successful, display a message
        alert("Author deleted");
        navigate(-1);
      })
      .catch((err) => {
        // If the DELETE returns an error, display a message
        alert("Unexpected error.", err);
        console.log(err);
      });
  };

  return (
    <>
      <NavbarInside></NavbarInside>

      <Container className="p-3 m-3">
        <h4
          className="p-3 m-3 text-center text-decoration-underline"
          style={{ color: "#f64b4b" }}
        >
          Author Details{" "}
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
                  <i className="bi bi-pencil-square h4" onClick={editAuthor}>
                    <Button
                      onClick={saveAuthor}
                      className="btn ms-3"
                      style={{ backgroundColor: "#f64b4b" }}
                    >
                      Save
                    </Button>
                  </i>
                  <i className="bi bi-trash h4 ms-3" onClick={deleteAuthor}></i>
                </Col>
              </Form.Group>

              <Form.Group className="mt-5">
                <Form.Label htmlFor="name">
                  <b style={{ color: "#f64b4b" }}>Author Name</b>
                </Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  placeholder="Author Name"
                  type="text"
                  value={name}
                  disabled={disableInput}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mt-5">
                <Form.Label htmlFor="biography">
                  <b style={{ color: "#f64b4b" }}>Biography</b>
                </Form.Label>
                <Form.Control
                  id="biography"
                  name="biography"
                  as="textarea"
                  rows={10}
                  value={biography}
                  placeholder="biography"
                  disabled={disableInput}
                  onChange={(e) => setBiography(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Button
              style={{ background: "#f64b4b", color: "white" }}
              className="btn btn-md mt-2"
              onClick={() => {
                navigate("/authors");
              }}
            >
              back
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
