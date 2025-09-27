import { aboutMeOne } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text, text2, text3, socials, certificates } = aboutMeOne;

const AboutMeOne = () => {
  return (
    <section className="about-me-one">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6}>
            <div className="about-me-one__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-me-one__content">
              <div className="sec-title">
                <h2>
                  {title}
                  <span className="dot">.</span>
                </h2>
              </div>
              <div className="about-me-one__social">
                {socials.map(({ id, icon, href }) => (
                  <a key={id} href={href}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
              <p className="about-me-one__text">{text}</p>
              <p className="about-me-one__text">{text2}</p>
              <p className="about-me-one__qoute">{text3}</p>
              <Row className="about-me-one__certificate-row">
                {certificates.map((image, i) => (
                  <Col key={i} md={6}>
                    <Image
                      src={
                        require(`@/images/update-26-02-2021/resources/${image}`)
                          .default.src
                      }
                      alt=""
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutMeOne;
