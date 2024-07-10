import React from "react";
import HomePageImage from "../images/Himage3.webp";
export const HomeMainContent = () => {
  return (
    <>
      <div className="container row" style={{ marginTop: 10 }}>
        <div className="container col-sm mt-5">
          <img src={HomePageImage} alt="SitePhoto"></img>
        </div>
        <div className="container col-sm m-4">
          <h1>BookShelf</h1>
          <h3 className="mt-4">
            <span style={{ color: "#D97448" }}>
              Where books find their perfect shelf – "effortlessly organized,
              endlessly enjoyed."
            </span>
          </h3>
          <h4 className="mt-5">
            Behind the scenes, we meticulously curate and organize a world of
            books, ensuring every title finds its place in our seamless
            inventory management system. Join us in fostering a love for
            literature through efficient cataloging and accessible browsing
            experiences.
          </h4>
        </div>
      </div>
      ;
    </>
  );
};
