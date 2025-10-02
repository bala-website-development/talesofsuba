import { partnerOne } from "@/data/partnerSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const PartnerOne = () => {
  return (
    <section className="partner-one">
      <div className="auto-container">
        <Row>
          {partnerOne.map(({ id, image, title, text }) => (
            <Col key={id} md={6} lg={4}>
              <div className="partner-one__card">
                <div className="partner-one__image">
                  <Image
                    src={
                      require(`@/images/update-01-10-2021/sponsor/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                </div>
                <div className="partner-one__content">
                  <h3 className="partner-one__title">{title}</h3>
                  <p className="partner-one__text">{text}</p>
                  <a href="#" className="partner-one__link">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PartnerOne;
