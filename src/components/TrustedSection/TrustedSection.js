import trustedSection from "@/data/trustedSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, features, title2, text, textList, image } = trustedSection;

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="auto-container">
        <div className="outer-container">
          <Row className="clearfix">
            <Col xl={5} lg={6} md={12} sm={12} className="left-col">
              <div className="inner">
                <div className="col-header">
                  <div className="header-inner">
                    <span>{title}</span>
                  </div>
                </div>
                <div className="features">
                  {features.map(({ id, title, subtitle }) => (
                    <div key={id} className="feature">
                      <div className="count">
                        <span>0{id}</span>
                      </div>
                      <h5>{title}</h5>
                      <div className="sub-text">{subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={7} lg={6} md={12} sm={12} className="right-col">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    {title2}
                    <span className="dot">.</span>
                  </h2>
                  <div className="lower-text">{text}</div>
                </div>
                <div className="featured-block-two clearfix">
                  <div className="image">
                    <Image src={image.src} alt="" />
                  </div>
                  <div className="text">
                    <ul>
                      {textList.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
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

export default TrustedSection;
