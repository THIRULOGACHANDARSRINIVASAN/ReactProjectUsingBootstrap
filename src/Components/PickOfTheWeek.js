import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const PickOfTheWeek = () => {
  const [show, setShow] = useState(false);

  return (
    <section id="musttry" className="my-3">
      <div className="text-center">
        <h2 className="display-5 text-primary my-3 py-3">
          <i class="bi bi-search-heart"></i> Pick of the Week!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Image
              src={require("../Assets/center.jpeg")}
              fluid={true}
              alt="pizza" className="rounded"
            ></Image>
          </Col>
          <Col>
            <div>
              <h2 className="h1"> Double cheese fagita</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                libero quod labore officia, natus autem provident voluptate
                obcaecati adipisci molestiae?
              </p>
              <Button
                className="text-bg-primary"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i class="bi bi-bag-heart-fill"></i> Buy now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="p-3 position-fixed bottom-0 end-0 p-3"
          position="bottom-end"
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => {
              setShow(false);
            }}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">added</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>Item added to your cart</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default PickOfTheWeek;
