import { aboutSectionThree } from "@/data/aboutSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const {
  image,
  title,
  subtitle,
  text,
  lists,
  barTitle,
  barPercent,
  aboutPerson: { name, tagline, image: personImage },
} = aboutSectionThree;

const AboutSectionThree = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className="about-section-three">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6}>
            <div className="about-section-three__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-section-three__content">
              <div className="sec-title-two text-left">
                <p>{subtitle}</p>
                <h2>{title}</h2>
              </div>
              <div className="about-section-three__summery">
                <p>{text}</p>
              </div>
              <ul className="list-unstyled about-section-three__list">
                {lists.map((text, i) => (
                  <li key={i}>
                    <i className="fa fa-check-circle"></i>
                    {text}
                  </li>
                ))}
              </ul>
              <div className="progress-box">
                <div className="bar-title">{barTitle}</div>
                <ReactVisibilitySensor
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
                          <CountUp
                            start={0}
                            end={countStart ? barPercent : 0}
                            duration={1}
                          />
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </ReactVisibilitySensor>
              </div>
              <div className="about-section-three__name">
                <Image src={personImage.src} alt="" />
                <h3>{name}</h3>
                <p>{tagline}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSectionThree;
