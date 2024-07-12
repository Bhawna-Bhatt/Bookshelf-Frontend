import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { HomeCarousel } from "./HomeCarousel";
import { NavbarInside } from "./NavbarInside";
import { About } from "./About";

export const HomePage = () => {
  const [uname, setUName] = useState();

  useEffect(() => {
    setUName(localStorage.getItem("Username"));
  }, []);

  return (
    <>
      <NavbarInside></NavbarInside>
      {/* <h3 className="mt-4" style={{ color: "#D97448" }}>
        Welcome ! {uname}
      </h3> */}
      <main>
        <HomeCarousel></HomeCarousel>
        <About></About>
      </main>
      <Footer></Footer>
    </>
  );
};
