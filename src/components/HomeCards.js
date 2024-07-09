import React from "react";
import list from "../homeCards.json";
import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

export const HomeCards = () => {
  return (
    <>
      <h1>Genres Available</h1>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
};
