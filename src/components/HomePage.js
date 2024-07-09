import React from "react";

import { Test } from "../Test";
import { NavbarMain } from "./NavbarMain";
import { Footer } from "./Footer";
import { HomeCarousel } from "./HomeCarousel";
import { HomeMainContent } from "./HomeMainContent";
import { HomeCards } from "./HomeCards";
import { NavbarInside } from "./NavbarInside";

export const HomePage = () => {
  return (
    <>
      <NavbarMain></NavbarMain>
      <NavbarInside></NavbarInside>
      <HomeMainContent></HomeMainContent>
      <HomeCarousel></HomeCarousel>
      <HomeCards></HomeCards>
      <Footer></Footer>
    </>
  );
};
