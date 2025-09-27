import { featureSix } from "@/data/featuresSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, imageCaption, title, text, items } = featureSix;

const FeatureSix = () => {
  return (
    <section className="feature-six">
      <div className="auto-container">
        <Row className="no-gutters">
          <Col md={12} lg={12} xl={6}>
            <div className="feature-six__image clearfix">
              <Image src={image.src} alt={imageCaption} />
              <div className="feature-six__image__caption">{imageCaption}</div>
            </div>
          </Col>
          <Col md={12} lg={12} xl={6} className="d-flex">
            <div className="my-auto">
              <div className="feature-six__content">
                <div className="sec-title">
                  <h2>
                    {title}
                    <span className="dot">.</span>
                  </h2>
                </div>
                <div className="feature-six__content__text">{text}</div>
                <ul className="m-0 list-unstyled feature-six__list">
                  {items.map((item, i) => (
                    <li key={i} className="feature-six__list__item">
                      <i className="flaticon-check-symbol"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeatureSix;
