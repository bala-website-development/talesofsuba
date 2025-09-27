import weDOSection from "@/data/weDOSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import TextSplit from "../Reuseable/TextSplit";

const { title, featuredImage, text, barTitle, barPercent, faqs } = weDOSection;

const WeDOSection = () => {
  const [countStart, setCountStart] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(1);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className="we-do-section">
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <TextSplit text={title} />
                  <span className="dot">.</span>
                </h2>
              </div>
              <div className="featured-block clearfix">
                <div className="image">
                  <Image src={featuredImage.src} alt="" />
                </div>
                <div className="text">{text}</div>
              </div>
              <div className="progress-box">
                <div className="bar-title">{barTitle}</div>
                <VisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <div className="bar">
                    <div
                      className="bar-inner count-bar"
                      style={{ width: countStart ? `${barPercent}%` : 0 }}
                    >
                      <div
                        style={{ opacity: countStart ? 1 : 0 }}
                        className="count-box"
                      >
                        <span className="count-text">
                          {countStart ? barPercent : 0}
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </VisibilitySensor>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="faq-box">
                <ul className="accordion-box clearfix">
                  {faqs.map(({ id, title, text }) => (
                    <li
                      key={id}
                      className={`accordion block${
                        currentFaq === id ? " active-block" : ""
                      }`}
                    >
                      <div
                        onClick={() => setCurrentFaq(id)}
                        className={`acc-btn${
                          currentFaq === id ? " active" : ""
                        }`}
                      >
                        <span className="count">{id}.</span> {title}
                      </div>
                      <div
                        className={`acc-content animated${
                          currentFaq === id ? " current slideInUp" : ""
                        }`}
                      >
                        <div className="content">
                          <div className="text">{text}</div>
                        </div>
                      </div>
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

export default WeDOSection;
