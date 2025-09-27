import { aboutSix } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, title, text, image, items } = aboutSix;

const AboutSix = () => {
  return (
    <section className="about-six">
      <div className="about-six__curv">
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
        <Row>
          <Col md={12} lg={5}>
            <div className="about-six__content">
              <div className="sec-title-six">
                <p className="sec-title-six__text">
                  <span>{tagline}</span>
                </p>
                <h2 className="sec-title-six__title">{title}</h2>
              </div>
              <div className="about-six__text">{text}</div>
            </div>
          </Col>
          <Col md={12} lg={7} className="animated fadeInRight">
            <div className="about-six__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          {items.map(({ id, icon, title }) => (
            <Col key={id} md={12} lg={4}>
              <div className="about-six__box">
                <i className={`${icon} about-six__box__icon`}></i>
                <h3 className="about-six__box__title">{title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default AboutSix;
