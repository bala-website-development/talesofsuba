import testimonialsSection from "@/data/testimonialsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTestimonial from "./SingleTestimonial";

const { testimonials } = testimonialsSection;

const TestimonialSectionPage = () => {
  return (
    <section className="testimonials-section testimonials-page">
      <div className="auto-container">
        <Row className="clearfix">
          {testimonials.map((testimonial) => (
            <SingleTestimonial
              key={testimonial.id}
              testimonial={testimonial}
              className="animated fadeInLeft col-lg-6 col-md-12 col-sm-12"
              userSelect
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TestimonialSectionPage;
