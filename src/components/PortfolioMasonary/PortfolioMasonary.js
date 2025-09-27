import portfolioMasonary from "@/data/portfolioMasonary";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 500,
};

const { title, filters, portfolios } = portfolioMasonary;

const getCurrent = (current) =>
  portfolios.filter((it) => it.filter.includes(current));

const getCount = (current) => getCurrent(current).length;

const PortfolioMasonary = () => {
  const [current, setCurrent] = useState("filter-item");
  const currentPortfolio = getCurrent(current);

  return (
    <section className="portfolio-masonary">
      <div className="auto-container">
        <h3>{title}</h3>
        <hr />

        <div className="portfolio-masonary__filter-wrapper mixitup-gallery">
          <ul className="post-filter filter-btns clearfix filters has-dynamic-filter-counter">
            {filters.map(({ id, name, filter }) => (
              <li
                key={id}
                onClick={() => setCurrent(filter)}
                className={`${current === filter ? "active " : ""}filter`}
                data-role="button"
              >
                {name} <sup>[{getCount(filter)}]</sup>
              </li>
            ))}
          </ul>

          <Link href="/portfolio">
            <a className="portfolio-masonary__more">View All</a>
          </Link>
        </div>

        <Masonry
          options={masonryOptions}
          className="row filter-layout dynamic-filter-count-layout masonary-layout position-relative"
        >
          {currentPortfolio.map(({ id, filter, image, tagline, title }) => (
            <Col
              key={id}
              lg={6}
              className={`masonary-item position-absolute ${filter.join(" ")}`}
            >
              <div className="portfolio-masonary__box">
                <Image
                  src={require(`@/images/gallery/${image}`).default.src}
                  alt=""
                />
                <div className="portfolio-masonary__box-content">
                  <p>{tagline}</p>
                  <h4>
                    <Link href="/portfolio-single">{title}</Link>
                  </h4>
                </div>
              </div>
            </Col>
          ))}
        </Masonry>

        <div className="text-center">
          <Link href="/about">
            <a className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Discover More</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMasonary;
