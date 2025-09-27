import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ReviewForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="review-form">
      <div className="auto-container">
        <h3 className="review-form__title">Add a review</h3>
        <p className="review-form__text">
          Rate this Product?
          {Array.from(Array(5)).map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="review-form__form default-form"
        >
          <Row>
            <Col lg={12}>
              <div className="form-group">
                <textarea
                  placeholder="Write Message"
                  {...register("message")}
                ></textarea>
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email")}
                />
              </div>
            </Col>
            <Col lg={12}>
              <button className="theme-btn btn-style-one" type="submit">
                <i className="btn-curve"></i>
                <span className="btn-title">Submit Review</span>
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
