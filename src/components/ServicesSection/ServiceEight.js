import { serviceEight } from "@/data/servicesSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { text, title, services } = serviceEight;

const ServiceEight = () => {
  return (
    <section className="service-eight">
      <div className="auto-container">
        <div className="sec-title-eight text-center">
          <p className="sec-title-eight__text">{text}</p>
          <h2 className="sec-title-eight__title">{title}</h2>
        </div>
        <Row>
          {services.map(({ id, icon, title, href }) => (
            <Col key={id} md={6} lg={3} className="animated fadeInLeft">
              <div className="service-eight__card">
                <div className="service-eight__card__inner">
                  <h3 className="service-eight__title">
                    <Link href={href}>{title}</Link>
                  </h3>
                  <div className="service-eight__icon">
                    <i className={icon}></i>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServiceEight;
