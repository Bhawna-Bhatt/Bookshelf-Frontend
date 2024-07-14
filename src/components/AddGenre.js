import React, { useState } from "react";
import { NavbarInside } from "./NavbarInside";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

export const AddGenre = () => {
  const [genreName, setgenreName] = useState("");
  const navigate = useNavigate();

  const addGenre = () => {
    const url = "http://localhost:4000/genres";
    console.log("in genre handling");
    //post
    //console.log(name, biography);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        genreName: genreName,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("genre added");
        alert("Genre added successfully");
        navigate("/books/new");
      })
      .catch((err) => {
        // If the PUT returns an error, ...
        console.log(err);
      });
  };

  return (
    <>
      <NavbarInside></NavbarInside>
      <h4 className="p-5 m-5" style={{ color: "#f64b4b" }}>
        Would you like to add a Genre ?
        <Button
          style={{ background: "#f64b4b", color: "white" }}
          className="btn btn-md ms-2"
          onClick={() => {
            navigate("/books/new");
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="mt-3">
              <b style={{ color: "#f64b4b" }}>Genre</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Please enter genre"
              id="name"
              name="name"
              onChange={(e) => setgenreName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Button
              onClick={addGenre}
              className="btn ms-3 mb-3"
              style={{ backgroundColor: "#f64b4b" }}
            >
              Add
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
