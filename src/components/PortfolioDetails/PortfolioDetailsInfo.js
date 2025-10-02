import { portfolioDetailsInfo } from "@/data/portfolioDetails";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const PortfolioDetailsInfo = () => {
  return (
    <section className="portfolio-details-info">
      <div className="auto-container">
        {portfolioDetailsInfo.map(({ id, image, title, text }) => (
          <Row key={id} className="flex-md-row-reverse">
            <Col md={6}>
              <div className="portfolio-details-info__image">
                <Image
                  src={
                    require(`@/images/update-26-02-2021/resources/${image}`)
                      .default.src
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={6} className="d-flex">
              <div className="my-auto">
                <div className="portfolio-details-info__content">
                  <h3 className="portfolio-details-info__title">{title}</h3>
                  <p className="portfolio-details-info__text">{text}</p>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default PortfolioDetailsInfo;
