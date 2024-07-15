import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { NavbarInside } from "./NavbarInside";
import { Container, Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router";

export const AddAuthor = () => {
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const navigate = useNavigate();

  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const addAuthor = () => {
    const url = "http://localhost:4000/authors";
    console.log("in add handling");
    //post
    //console.log(name, biography);

    if (name == "") {
      setToast(true);
      setToastColor("info");
      setToastMessage("Author name cannot be empty");
    } else {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          biography: biography,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("author added");
          setToast(true);
          setToastColor("success");
          setToastMessage("Author added successfully");
          setTimeout(() => {
            navigate("/authors");
          }, 2000);
        })
        .catch((err) => {
          // If the PUT returns an error, ...
          setToast(true);
          setToastColor("danger");
          setToastMessage("Some error occurred");
          console.log(err);
        });
    }
  };

  return (
    <>
      <NavbarInside></NavbarInside>
      <h4 className="p-5 m-5" style={{ color: "#f64b4b" }}>
        Would you like to add an Author ?
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
          width: "700px",
          borderStyle: "solid",
          color: "#f64b4b",
          borderWidth: "2px",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="mt-3">
              <b style={{ color: "#f64b4b" }}>Author Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter author name"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mt-3">
              <b style={{ color: "#f64b4b" }}>Biography</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Please enter few lines about author"
              rows={10}
              id="biography"
              name="biography"
              onChange={(e) => setBiography(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button
              onClick={addAuthor}
              className="btn ms-3 mb-3"
              style={{ backgroundColor: "#f64b4b" }}
            >
              Add
            </Button>
          </Form.Group>
        </Form>
        <ToastContainer
          position="top-end"
          className="p-3 mt-4"
          style={{ zIndex: 1 }}
        >
          <Toast
            show={toast}
            onClose={() => {
              setToast(false);
            }}
            delay={3000}
            autohide
            position="top-center"
            className="mt-5 text-white"
            bg={toastColor}
          >
            <Toast.Header>
              <strong className="me-auto">Hello admin!</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </>
  );
};
