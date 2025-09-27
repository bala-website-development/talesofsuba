import whyUs from "@/data/whyUs";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";

const { image, title, features, videoId } = whyUs;

const WhyUs = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="why-us-section">
        <div className="auto-container">
          <Row className="clearfix">
            <Col lg={6} md={12} sm={12} className="left-col">
              <div className="inner animated fadeInLeft">
                <div className="round-box">
                  <div className="image-box">
                    <Image src={image.src} alt="" />
                  </div>
                  <div className="vid-link">
                    <a onClick={() => setOpen(true)} className="lightbox-image">
                      <div className="icon">
                        <span className="flaticon-play-button-1"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="right-col">
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
                      <div className="inner-box">
                        <h6>{title}</h6>
                        <div className="text">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default WhyUs;
