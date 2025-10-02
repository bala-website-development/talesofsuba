import React from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

const SingleTestimonialSeven = ({ testimonial = {} }) => {
  const { image, name, designation, text } = testimonial;

  return (
    <SwiperSlide>
      <div className="testimonials-seven__item">
        <div className="testimonials-seven__top">
          <div className="testimonials-seven__image">
            <Image
              src={
                require(`@/images/update-01-10-2021/resources/${image}`).default
                  .src
              }
              alt=""
            />
          </div>
          <div className="testimonials-seven__info">
            <h3 className="testimonials-seven__name">{name}</h3>

            <p className="testimonials-seven__designation">{designation}</p>
          </div>
        </div>
        <div className="testimonials-seven__content">{text}</div>
      </div>
    </SwiperSlide>
  );
};

export default SingleTestimonialSeven;
