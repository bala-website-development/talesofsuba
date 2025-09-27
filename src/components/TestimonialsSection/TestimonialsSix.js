import { testimonialsSix } from "@/data/testimonialsSection";
import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TextSplit from "../Reuseable/TextSplit";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: "#testimonials-six-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: { delay: 5000 },
};

const TestimonialsSix = () => {
  return (
    <section className="testimonials-six">
      <div className="auto-container">
        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper">
            {testimonialsSix.map(({ id, name, text, subtitle }) => (
              <SwiperSlide key={id}>
                <div className="testimonials-six__item">
                  <p className="testimonials-six__content">
                    <TextSplit text={text} />
                  </p>
                  <div className="testimonials-six__meta">
                    <span>{name}</span>
                    <span>{subtitle}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div
            className="swiper-pagination"
            id="testimonials-six-pagination"
          ></div>
        </Swiper>
        <hr />
      </div>
    </section>
  );
};

export default TestimonialsSix;
