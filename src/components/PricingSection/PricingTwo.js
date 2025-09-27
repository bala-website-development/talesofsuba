import { pricingTwo } from "@/data/pricingSection";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SinglePricingTwo from "./SinglePricingTwo";

const PricingTwo = () => {
  const [isMonth, setIsMonth] = useState(true);

  return (
    <section className="pricing-two">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Choose <span>Pricing Plans</span> <br /> Which Suits Your Needs
          </h2>
        </div>
        <ul
          className="list-inline text-center switch-toggler-list"
          role="tablist"
          id="switch-toggle-tab"
        >
          {pricingTwo.map(({ id, className, name }) => (
            <li
              onClick={() => setIsMonth(className === "month")}
              key={id}
              className={`${className}${
                (isMonth && className === "month") ||
                (!isMonth && className === "year")
                  ? " active"
                  : ""
              }`}
            >
              <a>{name}</a>
            </li>
          ))}
          <li>
            <label
              onClick={() => setIsMonth((pre) => !pre)}
              className={`switch ${isMonth ? "on" : "off"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <div className="tabed-content">
          {pricingTwo.map(({ id, className, allPricing }) => (
            <div
              key={id}
              id={className}
              className={`animated fadeInUp ${
                (isMonth && className === "month") ||
                (!isMonth && className === "year")
                  ? "d-block"
                  : "d-none"
              }`}
            >
              <Row>
                {allPricing.map((pricing) => (
                  <SinglePricingTwo pricing={pricing} key={pricing.id} />
                ))}
              </Row>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTwo;
