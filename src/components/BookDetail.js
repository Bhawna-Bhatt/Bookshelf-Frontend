import { useParams } from "react-router-dom";
import React from "react";
import { Form, Input, Label, FormGroup, FormText, Button } from "reactstrap";

import { useLocation } from "react-router-dom";
import { NavbarInside } from "./NavbarInside";

export const BookDetail = () => {
  const location = useLocation();
  const book = location.state;
  return (
    <>
      <h3>change the book details</h3>
      <NavbarInside></NavbarInside>
      <Form className="container mt-4">
        <FormGroup>
          <Label for="exampleEmail">Book Title</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="text"
            value={book.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Author </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Genre </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Publication Date </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="text"
            value={book.publicationDate}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Book Price </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="text"
            value={book.price}
          />
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

        <Button>Edit Book Details</Button>
        <Button>Delete Book</Button>
      </Form>
    </>
  );
};
