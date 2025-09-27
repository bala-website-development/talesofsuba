import { testimonialsEight } from "@/data/testimonialsSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, title, testimonials } = testimonialsEight;

const TestimonialsEight = () => {
  return (
    <section className="testimonials-eight">
      <div className="auto-container">
        <div className="sec-title-eight text-center">
          <p className="sec-title-eight__text">{tagline}</p>
          <h2 className="sec-title-eight__title">{title}</h2>
        </div>
        <Row>
          {testimonials.map(({ id, text, image, name, designation }) => (
            <Col key={id} md={12} lg={4} className="animated fadeInUp">
              <div className="testimonials-eight__card">
                <div className="testimonials-eight__stars">
                  {Array.from(Array(5)).map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </div>
                <p className="testimonials-eight__text">{text}</p>
                <div className="testimonials-eight__info">
                  <div className="testimonials-eight__image">
                    <Image
                      src={
                        require(`@/images/update-01-10-2021/resources/${image}`)
                          .default.src
                      }
                      alt=""
                    />
                  </div>
                  <div className="testimonials-eight__meta">
                    <h3 className="testimonials-eight__name">{name}</h3>
                    <p className="testimonials-eight__designation">
                      {designation}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TestimonialsEight;
