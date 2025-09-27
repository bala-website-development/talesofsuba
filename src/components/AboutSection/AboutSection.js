import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image1, image2, title, text1, text2, textList, since } = aboutSectionOne;

const AboutSection = () => {
  const ref = useActive("#about");

  return (
    <section ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="inner">
              <div className="image-block animated fadeInLeft">
                <Image src={image1.src} alt="talesofsuba" />
              </div>
              <div className="image-block animated fadeInUp">
                <Image src={image2.src} alt="talesofsuba" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  <TextSplit text={title} />
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">{text1}</div>
              </div>
              <div className="text">
                <p>{text2}</p>
              </div>
              <div className="text clearfix">
                <ul>
                  {textList.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <div className="since">
                  <span className="txt">
                    Since <br />
                    {since}
                  </span>
                </div>
              </div>
              <div className="link-box">
                <Link href="/aboutus">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">More About US</span>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;
