import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import one from "../Assets/one.jpeg"
import two from "../Assets/two.jpeg"
import three from "../Assets/three.jpeg"

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center ">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item  interval={1000}>
              <img className="d-block w-100" src={one} alt="first slide" />
              <Carousel.Caption>
                <h3>Margeritta</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100"  src={two} alt="second slide" />
              <Carousel.Caption>
                <h3>pepperoni</h3>
                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100"  src={three} alt="third slide" />
              <Carousel.Caption>
                <h3>thin crust pizza</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5">Pizzas for every occasion!</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eius!</p>
      </div>
      
    </Container>
  );
};

export default Banner;
