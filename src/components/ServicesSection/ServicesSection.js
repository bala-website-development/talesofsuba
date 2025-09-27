import servicesSection from "@/data/servicesSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import SingleService from "./SingleService";

const { title, text, services } = servicesSection;

const ServicesSection = () => {
  return (
    <section className="services-section-two">
      <div className="auto-container">
        <div className="sec-title">
          <Row className="clearfix">
            <Col xl={6} lg={12} md={12} sm={12} className="column">
              <h2>
                <TextSplit text={title} />
                <span className="dot">.</span>
              </h2>
            </Col>
            <Col xl={6} lg={12} md={12} sm={12} className="column">
              <div className="lower-text">{text}</div>
            </Col>
          </Row>
        </div>
        <div className="services">
          <Row className="clearfix">
            {services.map((service) => (
              <SingleService service={service} key={service.id} />
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
