import { featuresSectionTwo } from "@/data/featuresSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, features, image, title2 } = featuresSectionTwo;

const FeaturesSectionTwo = () => {
  return (
    <section className="features-section-two">
      <div className="auto-container">
        <div className="content-container">
          <Row className="clearfix">
            <Col lg={5} md={12} sm={12} className="left-col">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    {title}
                    <span className="dot">.</span>
                  </h2>
                </div>
                <div className="features">
                  {features.map(({ id, title, text }) => (
                    <div key={id} className="feature">
                      <div className="count">
                        <span>0{id}</span>
                      </div>
                      <h5>{title}</h5>
                      <div className="sub-text">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={7} md={12} sm={12} className="right-col">
              <div className="inner">
                <div className="image-box animated fadeInRight">
                  <Image src={image.src} alt="" />
                  <div className="cap-box">
                    <div className="cap-inner">
                      <h5>{title2}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionTwo;
