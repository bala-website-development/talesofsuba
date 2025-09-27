import { servicesSectionThree } from "@/data/servicesSection";
import useActive from "@/hooks/useActive";
import React from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService";

const { title, services } = servicesSectionThree;

const ServicesSectionThree = ({ className = "" }) => {
  const ref = useActive("#services");

  return (
    <section
      ref={ref}
      className={`services-section-three ${className}`}
      id="services"
    >
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
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

export default ServicesSectionThree;
