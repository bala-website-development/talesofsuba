import { testimonialsFive } from "@/data/testimonialsSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SingleTestimonialFive from "./SingleTestimonialFive";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider-33",
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".tns-controls",
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const { title, items } = testimonialsFive;

const TestimonialsFive = () => {
  const listRef = useRef(null);

  return (
    <section className="testimonials-five">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>
        <div className="testimonials-carousel-two testimonials-five__carousel position-relative">
          <TinySlider options={settings} ref={listRef}>
            {items.map((testimonial) => (
              <SingleTestimonialFive
                key={testimonial.id}
                testimonial={testimonial}
                ref={listRef}
              />
            ))}
          </TinySlider>
          <div className="tns-controls">
            <button className="tns-prev">
              <span className="icon fa fa-angle-left"></span>
            </button>
            <button className="tns-next">
              <span className="icon fa fa-angle-right"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFive;
