import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

import { Navigate, useNavigate } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [GenreGenreId, setGenreGenreId] = useState("");
  const [AuthorAuthorId, setAuthorAuthorId] = useState("");

  return (
    <>
      <NavbarInside></NavbarInside>
      <h3>Add a Book</h3>

      <Form className="container mt-4">
        <FormGroup>
          <Label for="title">Book Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Book title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author </Label>
          <Input
            id="author"
            name="author"
            placeholder="author name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="genre">Genre </Label>
          <Input id="genre" name="genre" placeholder="Genre" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="publicationDate">Publication Date </Label>
          <Input
            id="publicationDate"
            name="publicationDate"
            placeholder="Publication Date"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Book Price </Label>
          <Input id="price" name="price" placeholder="Price" type="text" />
        </FormGroup>

        {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            id="exampleSelectMulti"
            multiple
            name="selectMulti"
            type="select"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}

        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Input name="radio1" type="radio" />{" "}
            <Label check>
              Option one is this and that—be sure to include why it‘s great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" />{" "}
            <Label check>
              Option two can be something else and selecting it will deselect
              option one
            </Label>
          </FormGroup>
        </FormGroup>

        <Button>Add Book</Button>
      </Form>
    </>
  );
};
