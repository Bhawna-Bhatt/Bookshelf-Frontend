import React, { useEffect, useState } from "react";

import { Test } from "../Test";
import { NavbarMain } from "./NavbarMain";
import { Footer } from "./Footer";
import { HomeCarousel } from "./HomeCarousel";
import { HomeMainContent } from "./HomeMainContent";
import { HomeCards } from "./HomeCards";
import { NavbarInside } from "./NavbarInside";

export const HomePage = () => {
  const [uname, setUName] = useState();

  useEffect(() => {
    setUName(localStorage.getItem("Username"));
  }, []);

  return (
    <>
      <NavbarInside></NavbarInside>
      <h3 className="mt-4" style={{ color: "#D97448" }}>
        Welcome ! {uname}
      </h3>
      <HomeMainContent></HomeMainContent>
      <HomeCarousel></HomeCarousel>
      <HomeCards></HomeCards>
      <Footer></Footer>
    </>
  );
};
