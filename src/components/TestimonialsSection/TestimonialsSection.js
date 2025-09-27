import testimonialsSection from "@/data/testimonialsSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SingleTestimonial from "./SingleTestimonial";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  loop: false,
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    991: {
      items: 2,
      gutter: 30,
    },
  },
};

const { title, testimonials } = testimonialsSection;

const TestimonialsSection = () => {
  const listRef = useRef(null);
  const ref = useActive("#testimonials");

  return (
    <section ref={ref} className="testimonials-section" id="testimonials">
      <div className="auto-container">
        <div className="sec-title">
          <h2>
            {title}
            <span className="dot">.</span>
          </h2>
        </div>
        <div className="carousel-box">
          <div className="testimonials-carousel">
            <TinySlider
              options={{ ...settings, container: `.my-slider-5` }}
              ref={listRef}
            >
              {testimonials.map((testimonial) => (
                <SingleTestimonial
                  key={testimonial.id}
                  testimonial={testimonial}
                  ref={listRef}
                />
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
