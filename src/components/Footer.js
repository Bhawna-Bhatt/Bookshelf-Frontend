import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-secondary" style={{ height: "100px" }}>
        <div className="container text-light text-center">
          <h3 className="mb-3">BookShelf</h3>
          <small className="text-white-75">
            &copy; Copyright by Pluralsight.All rights reserved.{" "}
          </small>
        </div>
      </footer>
    </>
  );
};
