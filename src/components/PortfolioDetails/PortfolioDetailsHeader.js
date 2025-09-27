import { portfolioDetailsHeader } from "@/data/portfolioDetails";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, image, text, lists, clients, categories } =
  portfolioDetailsHeader;

const PortfolioDetailsHeader = () => {
  return (
    <section className="portfolio-details-header">
      <div className="auto-container clearfix">
        <h2 className="portfolio-details-header__title">{title}</h2>
        <div className="clearfix">
          <div className="portfolio-details-header__image">
            <Image src={image.src} alt="" />
          </div>
        </div>
        <Row className="flex-lg-row-reverse">
          <Col sm={12} md={6}>
            <div className="portfolio-details-header__main-text">{text}</div>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col sm={12} md={6}>
                <h3 className="portfolio-details-header__sub-heading">
                  Project demands:
                </h3>

                <ul className="list-unstyled portfolio-details-header__list">
                  {lists.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <h3 className="portfolio-details-header__sub-heading">
                  Launched in 2021:
                </h3>
                <a href="#" className="portfolio-details-header__link">
                  View Website
                </a>
              </Col>
              <Col sm={12} md={6}>
                <h3 className="portfolio-details-header__sub-heading">
                  Clients:
                </h3>

                <p className="portfolio-details-header__text">{clients}</p>

                <h3 className="portfolio-details-header__sub-heading">
                  Category:
                </h3>

                <div className="portfolio-details-header__links">
                  {categories.map((category, i) => (
                    <a href="#" key={i}>
                      {category}
                    </a>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="portfolio-details-header__separator" />
      </div>
    </section>
  );
};

export default PortfolioDetailsHeader;
