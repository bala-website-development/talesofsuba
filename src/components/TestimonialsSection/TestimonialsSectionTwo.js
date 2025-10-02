import { testimonialsSectionTwo } from "@/data/testimonialsSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: `.my-slider-28`,
  loop: false,
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

const { bg, testimonials } = testimonialsSectionTwo;

const TestimonialsSectionTwo = () => {
  const listRef = useRef(null);

  return (
    <Jarallax
      speed={0.3}
      imgPosition="50% 50%"
      className="testimonials-section-two"
    >
      <JarallaxImage className="image-layer" src={bg.src} />
      <div className="auto-container">
        <div className="carousel-box">
          <div className="testimonials-carousel-two position-relative">
            <TinySlider options={settings} ref={listRef}>
              {testimonials.map(({ id, text, name }) => (
                <div
                  style={{ userSelect: "none" }}
                  key={id}
                  className="testi-block-two"
                  ref={listRef}
                >
                  <div className="inner">
                    <div className="icon">
                      <span>“</span>
                    </div>
                    <div className="text">{text}</div>
                    <div className="info">
                      <div className="name">{name}</div>
                    </div>
                  </div>
                </div>
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
      </div>
    </Jarallax>
  );
};

export default TestimonialsSectionTwo;
