import { aboutSeven } from "@/data/aboutSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { images, tagline, title, text, title2, lists } = aboutSeven;

const AboutSeven = () => {
  return (
    <section className="about-seven">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6} className="animated fadeInLeft">
            <div className="about-seven__images">
              {images.map((image, i) => (
                <Image key={i} src={image.src} alt="" />
              ))}
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-seven__content">
              <div className="sec-title-six text-start">
                <p className="sec-title-six__text">
                  <span>{tagline}</span>
                </p>
                <h2 className="sec-title-six__title">{title}</h2>
              </div>
              <p className="about-seven__summery">{text}</p>
              <h3 className="about-seven__title">{title2}</h3>
              <ul className="about-seven__list list-unstyled">
                {lists.map((list, i) => (
                  <li key={i}>
                    <i className="flaticon-checked"></i>
                    {list}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <a className="about-seven__btn thm-btn__six">Discover More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSeven;
