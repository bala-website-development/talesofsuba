import getQuote from "@/data/getQuote";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const options = [
  "Website Development",
  "Graphic Designing",
  "Digital Marketing",
  "App Development",
].map((it) => ({
  value: it,
  label: it,
}));

const {
  featuredImage,
  featuredTitle,
  text,
  count,
  counterTitle,
  counterImage,
  formTitle,
  inputs,
} = getQuote;

const GetQuote = () => {
  const [service, setService] = useState("");

  const handleSelectService = ({ value }) => {
    setService(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log({ ...data, service });
  };

  return (
    <section className="get-quote-section">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={8} lg={12} md={12} sm={12} className="left-col">
            <div className="inner">
              <div className="featured-block clearfix">
                <div className="image">
                  <Image src={featuredImage.src} alt="" />
                </div>
                <h4>{featuredTitle}</h4>
                <div className="text">{text}</div>
              </div>
              <div className="counter">
                <div className="counter-inner clearfix">
                  <div className="counter-text">
                    <div className="count-box">
                      <span className="count-text">
                        <VisibilityCountUp count={count} />
                      </span>
                    </div>
                    <div className="counter-title">{counterTitle}</div>
                  </div>
                  <div className="counter-image">
                    <Image src={counterImage.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={12} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="form-box animated fadeInRight">
                <div className="default-form">
                  <h4>
                    {formTitle}
                    <span>.</span>
                  </h4>
                  <form onSubmit={handleSubmit}>
                    {inputs.map(({ name, type, placeholder }) => (
                      <div key={name} className="form-group">
                        <div className="field-inner">
                          <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            required
                          />
                        </div>
                      </div>
                    ))}
                    <div className="form-group">
                      <div className="field-inner">
                        <CustomSelect
                          name="service"
                          options={options}
                          onChange={handleSelectService}
                          placeholder="Choose Service"
                          instanceId="serviceSelect10"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="theme-btn btn-style-one">
                        <i className="btn-curve"></i>
                        <span className="btn-title">Request a quote</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetQuote;
