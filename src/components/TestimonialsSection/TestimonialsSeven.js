import { testimonialsSeven } from "@/data/testimonialsSection";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleTestimonialSeven from "./SingleTestimonialSeven";

SwiperCore.use([Autoplay, Navigation]);

const options = {
  spaceBetween: 30,
  loop: true,
  slidesPerGroup: 3,
  autoplay: { delay: 5000 },
  navigation: {
    nextEl: "#testimonials-seven__swiper-button-next",
    prevEl: "#testimonials-seven__swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    767: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    991: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1199: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
};

const TestimonialsSeven = () => {
  return (
    <section className="testimonials-seven">
      <div className="auto-container">
        <div className="sec-title-seven">
          <h2 className="sec-title-seven__title">
            What our <span>Clients</span> <br />
            Says About the Work
          </h2>
        </div>
        <div className="testimonials-seven__nav">
          <div id="testimonials-seven__swiper-button-next">
            <span className="flaticon-left-arrow-2"></span>
          </div>
          <div id="testimonials-seven__swiper-button-prev">
            <span className="flaticon-send"></span>
          </div>
        </div>
      </div>
      <div className="testimonials-seven__slider-wrapper">
        <div className="testimonials-seven__slider">
          <Swiper {...options} className="thm-swiper__slider">
            <div className="swiper-wrapper">
              {testimonialsSeven.map((testimonial) => (
                <SingleTestimonialSeven
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSeven;
