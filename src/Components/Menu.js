import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PizzaCard from "./PizzaCard";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6, 7,8,9,1,7]);

  return (
      <section id="menu" className="bg-light">
        <Container>
          <div className="text-center">
            <h3 className="text-primary my-3 py-5">
              Treat yourself with everyday menu <i class="bi bi-tiktok"></i>
            </h3>
          </div>
          <Row>
            {menu.map((item) => {
              return (
                <Col md={6} lg={4} key={item}>
                  <PizzaCard />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
  );
};

export default Menu;
