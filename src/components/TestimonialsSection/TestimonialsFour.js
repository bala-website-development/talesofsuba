import { testimonialsFour } from "@/data/testimonialsSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SingleTestimonialFour from "./SingleTestimonialFour";
const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider-22",
  loop: false,
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    600: {
      items: 1,
      gutter: 30,
    },
    768: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 3,
      gutter: 30,
    },
  },
};

const { title, text, items } = testimonialsFour;

const TestimonialsFour = () => {
  const listRef = useRef(null);

  return (
    <section className="testimonials-four">
      <div className="auto-container">
        <div className="testimonials-four__block__top">
          <div className="sec-title">
            <h2>
              {title}
              <span className="dot">.</span>
            </h2>
          </div>

          <div className="block-text">
            <p>{text}</p>
          </div>
        </div>
        <div className="testimonials-four-carousel position-relative">
          <TinySlider options={settings} ref={listRef}>
            {items.map((item) => (
              <SingleTestimonialFour
                ref={listRef}
                key={item.id}
                testimonial={item}
              />
            ))}
          </TinySlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFour;
