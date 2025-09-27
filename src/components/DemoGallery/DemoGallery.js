import demoGallery from "@/data/demoGallery";
import Link from "next/link";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SingleBox from "./SingleBox";

const { title, filters, portfolios } = demoGallery;

const masonryOptions = {
  transitionDuration: 500,
};

const getFilteredPortfolios = (filterData) =>
  filterData === "all"
    ? portfolios
    : portfolios.filter((project) => project.filter === filterData);

const getCount = (filterData) => getFilteredPortfolios(filterData).length;

const DemoGallery = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const filteredPortfolios = getFilteredPortfolios(currentFilter);

  return (
    <section className="portfolio-masonary demo-gallery">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>{title}</h2>
        </div>
        <div className="portfolio-masonary__filter-wrapper mixitup-gallery justify-content-center">
          <ul className="filter-btns clearfix filters has-dynamic-filter-counter portfolio-masonary__filters">
            {filters.map(({ id, title, filter }) => (
              <li
                onClick={() => setCurrentFilter(filter)}
                key={id}
                className={`filter${currentFilter === filter ? " active" : ""}`}
                data-role="button"
              >
                {title}
                <sup>[{getCount(filter)}]</sup>
              </li>
            ))}
          </ul>
        </div>
        <Row className="position-relative filter-list dynamic-filter-count-layout">
          {filteredPortfolios.map((box) => (
            <SingleBox key={box.id} box={box} />
          ))}
        </Row>

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

export default DemoGallery;
