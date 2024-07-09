import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <>
      {/* <Header></Header> */}
      <h3>Page you are looking for is missing.</h3>
    </>
  );
};
