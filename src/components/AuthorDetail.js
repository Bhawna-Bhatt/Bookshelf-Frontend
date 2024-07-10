import React from "react";
import { NavbarInside } from "./NavbarInside";
import { useLocation } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

export const AuthorDetail = () => {
  const location = useLocation();
  const author = location.state;

  console.log("in edit task", author);

  return (
    <>
      <NavbarInside></NavbarInside>
      <h3>Change the Author Details</h3>
      <Form className="container mt-4">
        <FormGroup>
          <Label for="name">Author Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Author Name"
            type="text"
            value={author.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="biography">Biography</Label>
          <Input
            id="biography"
            name="biography"
            type="textarea"
            value={author.biography}
            placeholder="biography"
          />
        </FormGroup>

        {/* <FormGroup tag="fieldset">
          <legend>Would you like to change details ?</legend>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Yes</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>No</Label>
          </FormGroup>
        </FormGroup> */}

        <Button>Edit Author</Button>
        <Button className="ms-2">Delete Author</Button>
      </Form>
    </>
  );
};
