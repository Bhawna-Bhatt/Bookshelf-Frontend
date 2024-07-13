import { useParams } from "react-router-dom";
import React from "react";
import Form from "react-bootstrap/Form";

import { Navigate, useNavigate } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";

export const AddAuthor = () => {
  return (
    <>
      <NavbarInside></NavbarInside>
      <i className="m-5">Add an Author</i>
      <i className="m-5">Add an Author</i>
      <i className="m-5">Add an Author</i>
      <i className="m-5">Add an Author</i>
      <Form className="m-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
};
