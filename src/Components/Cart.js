import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Orders from "./Orders";

const Cart = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="light" onClick={()=>setShow(!show)} className="me-2 position-relative justify-end">
      <i class="bi bi-cart4"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
      </Button>
      <Offcanvas show={show} onHide={()=>setShow(!show)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart:)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders/>
          <div className="text-end">
            <Button variant="primary" className="my-3">Check out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
