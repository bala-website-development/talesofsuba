import { shopPage } from "@/data/shopPage";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";
import ProductCard from "./ProductCard";

const options = ["Sort by Price", "Sort by Date", "Sort by Ratings"].map(
  (it) => ({
    value: it,
    label: it,
  })
);

const { categories, products } = shopPage;

const ShopPage = () => {
  const [sliderValue, setSliderValue] = useState([30, 150]);

  const [sortBy, setSortBy] = useState("Sort by Price");

  const handleSelectSortBy = ({ value }) => {
    setSortBy(value);
  };

  const handleSlideChange = (value) => {
    setSliderValue(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <section className="shop-page">
      <div className="auto-container">
        <Row>
          <Col lg={3}>
            <div className="shop-sidebar">
              <div className="shop-search shop-sidebar__single">
                <form onSubmit={handleSearch}>
                  <input type="text" placeholder="Search" name="search" />
                  <button type="submit">
                    <i className="flaticon-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="shop-range shop-sidebar__single">
                <h3 className="shop-sidebar__title">Price</h3>
                <div className="product-sidebar__price-range">
                  <Slider
                    range
                    allowCross={false}
                    value={sliderValue}
                    onChange={handleSlideChange}
                    max={200}
                    min={10}
                    className="range-slider-price"
                    id="range-slider-price"
                    draggableTrack
                  />
                  <div className="form-group">
                    <div className="left">
                      <p>
                        $
                        <span id="min-value-rangeslider">{sliderValue[0]}</span>
                      </p>
                      <span>-</span>
                      <p>
                        $
                        <span id="max-value-rangeslider">{sliderValue[1]}</span>
                      </p>
                    </div>
                    <div className="right">
                      <button className="theme-btn btn-style-one">
                        <i className="btn-curve"></i>
                        <span className="btn-title">Filter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-category shop-sidebar__single">
                <h3 className="shop-sidebar__title">Categories</h3>
                <ul className="list-unstyled">
                  {categories.map((category, i) => (
                    <li key={i}>
                      <a href="#">{category}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="product-sorting default-form">
              <p>Showing 1–9 of 12 results</p>
              <div className="form-group">
                <CustomSelect
                  name="sortBy"
                  options={options}
                  onChange={handleSelectSortBy}
                  instanceId="sortBySelect21"
                  defaultValue={options[0]}
                />
              </div>
            </div>

            <Row>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Row>

            <div className="text-center load-more-products">
              <a className="theme-btn btn-style-one" href="#">
                <i className="btn-curve"></i>
                <span className="btn-title">Load More</span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ShopPage;
