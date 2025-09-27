import { aboutTen } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, tagline, title, text, boxes } = aboutTen;

const AboutTen = () => {
  return (
    <section className="about-ten">
      <div className="auto-container">
        <Row>
          <Col lg={5} className="animated fadeInLeft">
            <div className="about-ten__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
          <Col lg={7} className="d-flex">
            <div className="my-auto">
              <div className="about-ten__content">
                <div className="sec-title-eight text-start">
                  <p className="sec-title-eight__text">{tagline}</p>
                  <h2 className="sec-title-eight__title">{title}</h2>
                </div>
                <p className="about-ten__text">{text}</p>
                {boxes.map(({ id, text, title }) => (
                  <div key={id} className="about-ten__box">
                    <h3 className="about-ten__box__title">{title}</h3>
                    <p className="about-ten__box__text">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutTen;
