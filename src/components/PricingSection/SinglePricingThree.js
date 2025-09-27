import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const SinglePricingThree = ({ pricing = {} }) => {
  const { icon, name, amount, employees, tagline } = pricing;

  return (
    <Col md={6} lg={3}>
      <div className="pricing-three__card text-center">
        <div className="pricing-three__icon">
          <i className={icon}></i>
        </div>
        <h3 className="pricing-three__name">{name}</h3>
        <p className="pricing-three__amount">
          <i className="pricing-three__currency">$</i>
          {amount}
        </p>
        <ul className="list-unstyled pricing-three__list">
          <li>{employees}/6 Employees</li>
        </ul>
        <p className="pricing-three__tagline">{tagline}</p>
        <Link href="/contact">
          <a className="theme-btn btn-style-two">
            <i className="btn-curve"></i>
            <span className="btn-title">Choose a plan</span>
          </a>
        </Link>
      </div>
    </Col>
  );
};

export default SinglePricingThree;
