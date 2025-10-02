import { funFactSeven } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const FunFactSeven = () => {
  return (
    <section className="funfact-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Over 2200 <span>Projects</span>
            <br />
            Completed
          </h2>
        </div>
        <Row>
          {funFactSeven.map(({ id, count, text }) => (
            <Col key={id} md={6} lg={3}>
              <div className="funfact-seven__item">
                <h3 className="funfact-seven__title count-box">
                  <span className="count-text">
                    <VisibilityCountUp count={count} />
                  </span>
                </h3>
                <p className="funfact-seven__text">{text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FunFactSeven;
