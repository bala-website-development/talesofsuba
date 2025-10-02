import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTestimonialFour = (
  { testimonial = {}, className = "", userSelect = false },
  ref
) => {
  const { text, name, designation, image } = testimonial;

  return (
    <div
      ref={ref}
      style={{ userSelect: userSelect ? "auto" : "none" }}
      className={`item ${className}`}
    >
      <div className="testimonials-four-card">
        <div className="testimonials-four-card__content">
          <p>{text}</p>
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
        <div className="image">
          <Image
            src={require(`@/images/resource/${image}`).default.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTestimonialFour);
