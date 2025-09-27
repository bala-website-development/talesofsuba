import { testimonialsFour } from "@/data/testimonialsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTestimonialFour from "./SingleTestimonialFour";

const { items } = testimonialsFour;

const TestimonialsTwoPage = () => {
  return (
    <section className="testimonials-four">
      <div className="auto-container">
        <Row>
          {items.slice(0, 6).map((testimonial) => (
            <SingleTestimonialFour
              key={testimonial.id}
              testimonial={testimonial}
              className="col-md-6 col-lg-4"
              userSelect
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TestimonialsTwoPage;
