import agencySection from "@/data/agencySection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, tabBtns, tabContents, text, image, textList } = agencySection;

const AgencySection = () => {
  const [current, setCurrent] = useState("tab-1");

  return (
    <section className="agency-section">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="left-col">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <TextSplit text={title} /> <span className="dot">.</span>
                </h2>
              </div>
              <div className="default-tabs tabs-box">
                <ul className="tab-btns tab-buttons clearfix">
                  {tabBtns.map(({ id, text }) => (
                    <li
                      onClick={() => setCurrent(id)}
                      key={id}
                      className={`tab-btn${
                        current === id ? " active-btn" : ""
                      }`}
                    >
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="tabs-content">
                  {tabContents.map(({ id, text }) => (
                    <div
                      key={id}
                      className={`tab animated${
                        current === id ? " active-tab fadeInUp" : ""
                      }`}
                      id={id}
                    >
                      <div className="content">
                        <div className="text">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="text">{text}</div>
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
    </section>
  );
};

export default AgencySection;
