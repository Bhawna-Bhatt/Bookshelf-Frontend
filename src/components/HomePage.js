import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { HomeCarousel } from "./HomeCarousel";
import { NavbarInside } from "./NavbarInside";
import { About } from "./About";

export const HomePage = () => {
  const [uname, setUName] = useState("");

  useEffect(() => {
    setUName(localStorage.getItem("Username"));
  }, []);

  return (
    <>
      <NavbarInside></NavbarInside>
      <main>
        <HomeCarousel></HomeCarousel>
        <h4
          className="mt-1 "
          style={{
            color: "#D97448",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          Welcome ! {uname}
        </h4>
        <About></About>
      </main>
      <Footer></Footer>
    </>
  );
};
