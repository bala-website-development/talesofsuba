import { getQuoteThree } from "@/data/getQuote";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const { title, inputs } = getQuoteThree;

const GetQuoteThree = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="get-quote-three">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title}
            <span className="dot">.</span>
          </h2>
        </div>
        <div className="form-box">
          <div className="default-form">
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
              <Row className="clearfix">
                {inputs.map(({ name, type, placeholder }) => (
                  <Col
                    key={name}
                    lg={type ? 6 : 12}
                    md={type ? 6 : 12}
                    sm={12}
                    className="form-group"
                  >
                    <div className="field-inner">
                      {type ? (
                        <input
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          {...register(name, { required: true })}
                        />
                      ) : (
                        <textarea
                          name={name}
                          placeholder={placeholder}
                          {...register(name, { required: true })}
                        ></textarea>
                      )}
                      {errors[name] && (
                        <label htmlFor={name} className="error">
                          This Field Is Required.
                        </label>
                      )}
                    </div>
                  </Col>
                ))}
                <Col lg={12} md={12} sm={12} className="form-group">
                  <button className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Send message</span>
                  </button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuoteThree;
