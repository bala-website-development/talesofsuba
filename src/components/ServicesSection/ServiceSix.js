import { serviceSix } from "@/data/servicesSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleServiceSix from "./SingleServiceSix";

const { tagline, title, services } = serviceSix;

const ServiceSix = () => {
  return (
    <section className="service-six">
      <div className="service-six__curv">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 122"
        >
          <path
            fill="currentColor"
            d="M0,122.005S80.814,20.129,283.871,2.426C526.255-18.706,550.388,91.2,792.025,102.115c243.565,11.006,299.815-108,520.765-97.662,220.1,10.3,273.86,88.036,415.09,98.26C1878.57,113.62,1920,51.068,1920,51.068V-862.995H0v985Z"
          />
        </svg>
      </div>

      <div className="auto-container">
        <div className="sec-title-six text-center">
          <p className="sec-title-six__text">
            <span>{tagline}</span>
          </p>
          <h2 className="sec-title-six__title">{title}</h2>
        </div>
        <Row>
          {services.map((service) => (
            <SingleServiceSix key={service.id} service={service} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServiceSix;
