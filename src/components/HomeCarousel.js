import React from "react";
import { Carousel } from "react-bootstrap";
import Pic4 from "../Logo.png";

export const HomeCarousel = () => {
  return (
    <>
      <section id="homepage" className="hero-block carousel1">
        <Carousel className="mt-5">
          <Carousel.Item>
            <img
              classname="d-block w-100"
              src={Pic4}
              alt="first slide"
              style={{ height: "1" }}
            />
            <Carousel.Caption>
              <h1>BookShelf</h1>
              <h3>
                Where books find their perfect shelf – "effortlessly organized,
                endlessly enjoyed."
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img classname="d-block w-100" src={Pic4} alt="second slide" />
            <Carousel.Caption>
              <h2>
                Behind the scenes, we meticulously curate and organize a world
                of books, ensuring every title finds its place in our seamless
                inventory management system.
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img classname="d-block w-100" src={Pic4} alt="third slide" />

            <Carousel.Caption>
              <h2>
                Join us in fostering a love for literature through efficient
                cataloging and accessible browsing experiences.
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};
