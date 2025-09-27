import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTestimonialsThree = ({ testimonial = {} }) => {
  const { text, name, tagline, image } = testimonial;

  return (
    <Col md={12} lg={4}>
      <div className="testi-block-three__single">
        <div className="testi-block-three__top">
          <p>{text}</p>
        </div>
        <Image
          src={
            require(`@/images/update-1-12-2020/resources/${image}`).default.src
          }
          alt=""
        />
        <h3>{name}</h3>
        <span>{tagline}</span>
      </div>
    </Col>
  );
};

export default SingleTestimonialsThree;
