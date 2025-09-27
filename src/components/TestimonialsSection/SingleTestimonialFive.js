import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTestimonialFive = ({ testimonial = {} }, ref) => {
  const { image, text, title, designation } = testimonial;

  return (
    <div ref={ref} className="item" style={{ userSelect: "none" }}>
      <div className="testimonials-five-card">
        <Image
          src={image.src}
          alt=""
          className="testimonials-five-card__image"
        />
        <p className="testimonials-five-card__text">{text}</p>
        <h3 className="testimonials-five-card__title">{title}</h3>
        <span className="testimonials-five-card__designation">
          {designation}
        </span>
      </div>
    </div>
  );
};

export default forwardRef(SingleTestimonialFive);
