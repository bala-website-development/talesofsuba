import { aboutMeCounter } from "@/data/aboutSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CounterBlockTwo from "./CounterBlockTwo";

const { title, counters } = aboutMeCounter;

const AboutMeCounter = () => {
  return (
    <div className="about-me-counter">
      <div className="auto-container">
        <Row className="align-content-md-center">
          <Col md={6} lg={3} className="d-flex align-content-md-center">
            <div className="sec-title">
              <h2>
                {title}
                <span className="dot">.</span>
              </h2>
            </div>
          </Col>
          {counters.map((counter) => (
            <CounterBlockTwo key={counter.id} counter={counter} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AboutMeCounter;
