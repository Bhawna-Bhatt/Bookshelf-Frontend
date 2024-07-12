import React, { useState } from "react";
import { NavbarInside } from "./NavbarInside";
import { useLocation } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

export const AuthorDetail = () => {
  const location = useLocation();
  const author = location.state;
  const [disableInput, setDisableInput] = useState(true);

  console.log("in edit task", author);

  const editAuthor = () => {
    setDisableInput(false);
  };

  const saveAuthor = () => {
    setDisableInput(true);
  };

  const deleteAuthor = () => {};

  return (
    <>
      <NavbarInside></NavbarInside>
      <i class="bi bi-bookmark-check"></i>
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
            disabled={disableInput}
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
            disabled={disableInput}
          />
        </FormGroup>

        <Button className="m-4" onClick={editAuthor}>
          Edit Author
        </Button>
        <Button className="m-4" onClick={saveAuthor}>
          Save
        </Button>
        <Button className="m-4" onClick={deleteAuthor}>
          Delete Author
        </Button>
      </Form>
    </>
  );
};
