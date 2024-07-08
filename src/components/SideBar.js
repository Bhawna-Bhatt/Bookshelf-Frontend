import React, { useState } from "react";
import {
  Button,
  Modal,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  noRefCheck,
} from "reactstrap";

export const SideBar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
        <Button color="primary" onClick={toggle}>
          Open
        </Button>
        <Offcanvas isOpen={modal} toggle={toggle}>
          <OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </OffcanvasBody>
        </Offcanvas>
      </div>
      ;
    </>
  );
};
