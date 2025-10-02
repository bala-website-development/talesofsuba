import { checkoutPage } from "@/data/checkoutPage";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";

const options = ["USA", "Canada", "Australia"].map((it) => ({
  value: it,
  label: it,
}));

const { inputs, checkoutMethods } = checkoutPage;

const CheckoutPage = () => {
  const [currentCheckout, setCurrentCheckout] = useState(1);
  const [country, setCountry] = useState("USA");
  const [country2, setCountry2] = useState("USA");

  const handleSelectCountry = ({ value }) => {
    setCountry(value);
  };

  const handleSelectCountry2 = ({ value }) => {
    setCountry2(value);
  };

  return (
    <section className="checkout-page">
      <div className="auto-container">
        <p className="checkout-page__returning">
          Returning Customer? <Link href="/login">Click here to Login</Link>
        </p>
        <Row>
          <Col lg={6}>
            <h3 className="checkout__title">Billing Details</h3>
            <div className="default-form">
              <Row>
                <Col md={12} className="form-group">
                  <div className="field-inner">
                    <CustomSelect
                      name="country"
                      options={options}
                      onChange={handleSelectCountry}
                      defaultValue={options[0]}
                      placeholder="Choose Country"
                      instanceId="countrySelect11"
                    />
                  </div>
                </Col>
                {inputs.map(({ name, placeholder, type, label, id, col }) => (
                  <Col key={name} md={col} className="form-group">
                    <div className="field-inner">
                      <input
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                      />
                      {label && (
                        <label className="ms-1" htmlFor={id}>
                          {label}
                        </label>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="checkout__checkbox">
              <input type="checkbox" id="different-address" />
              <label htmlFor="different-address" className="checkout__title">
                Ship to a different address
              </label>
            </div>
            <div className="default-form">
              <div className="row">
                <Col md={12} className="form-group">
                  <div className="field-inner">
                    <CustomSelect
                      name="country2"
                      options={options}
                      onChange={handleSelectCountry2}
                      defaultValue={options[0]}
                      placeholder="Choose Country"
                      instanceId="countrySelect22"
                    />
                  </div>
                </Col>
                {inputs.slice(0, -1).map(({ name, placeholder, type, col }) => (
                  <Col key={name} md={col} className="form-group">
                    <div className="field-inner">
                      <input
                        type={type}
                        placeholder={placeholder}
                        name={name}
                      />
                    </div>
                  </Col>
                ))}
                <Col md={12} className="form-group">
                  <div className="field-inner">
                    <textarea
                      name="notes"
                      placeholder="Notes About Your Order"
                    ></textarea>
                  </div>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
        <h3 className="checkout__title">Your order</h3>
        <Row>
          <Col lg={6}>
            <div className="table-responsive">
              <table className="table checkout__table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>$10.99</td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td>$10.99</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>$00.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$20.98</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
          <Col lg={6}>
            <div className="checkout__payment">
              {checkoutMethods.map(({ id, title, text, image }) => (
                <div
                  key={id}
                  className={`checkout__payment__item${
                    currentCheckout === id
                      ? " checkout__payment__item--active"
                      : ""
                  }`}
                >
                  <h3
                    onClick={() => setCurrentCheckout(id)}
                    className="checkout__payment__title"
                  >
                    {title}
                    {image && <Image src={image.src} alt="" />}
                  </h3>
                  <div
                    className={`checkout__payment__content animated ${
                      currentCheckout === id ? "d-block fadeInUp" : "d-none"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right d-flex justify-content-end">
              <Link href="/checkout">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Place your order</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CheckoutPage;
