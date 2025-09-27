import React from "react";
import { SwiperSlide } from "swiper/react";
import TextSplit from "../Reuseable/TextSplit";

const SingleSlideSix = ({ slide = {} }) => {
  const { bg, text, title } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/update-01-10-2021/slider/${bg}`).default.src
          })`,
        }}
      ></div>

      <div className="auto-container">
        <div className="slider-six__content">
          <p className="slider-six__text">
            <span>{text}</span>
          </p>
          <h2 className="slider-six__title">
            <TextSplit text={title} />
          </h2>
          <a href="#" className="slider-six__btn thm-btn__six">
            Discover More
          </a>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleSlideSix;
