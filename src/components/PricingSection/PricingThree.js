import { pricingThree } from "@/data/pricingSection";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SinglePricingThree from "./SinglePricingThree";

const PricingThree = () => {
  const [current, setCurrent] = useState("month");

  return (
    <section className="pricing-three">
      <div className="auto-container">
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          {pricingThree.map(({ id, className, name }) => (
            <li
              key={id}
              className={`${className}${
                current === className ? " active" : ""
              }`}
              onClick={() => setCurrent(className)}
            >
              <a href="#">{name}</a>
            </li>
          ))}
          <li>
            <label
              onClick={() =>
                setCurrent((pre) => (pre === "month" ? "year" : "month"))
              }
              className={`switch ${current === "month" ? "on" : "off"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <div className="tabed-content">
          {pricingThree.map(({ id, className, allPricing }) => (
            <div
              key={id}
              id={className}
              className={`animated fadeInUp ${
                current === className ? "d-block" : "d-none"
              }`}
            >
              <Row>
                {allPricing.map((pricing) => (
                  <SinglePricingThree pricing={pricing} key={pricing.id} />
                ))}
              </Row>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingThree;
