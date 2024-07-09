import React from "react";
import { useState, useEffect } from "react";

export const Test = () => {
  const [books, setBooks] = useState();

  //
  fetch("http://localhost:4000/books")
    .then((response) => response.json())
    .then((data) => {
      console.log("fetch", data);
      setBooks(data);
    })
    .catch((err) => console.log(err));

  //

  return (
    <>
      <p>{books}</p>
    </>
  );
};
