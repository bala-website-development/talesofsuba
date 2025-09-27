import React, { Fragment } from "react";
import { SwiperSlide } from "swiper/react";

const SingleSliderSeven = ({ slider = {} }) => {
  const { bg, title, titleHighlight, text } = slider;

  return (
    <SwiperSlide>
      <div className="slider-seven__round__shape-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 750 877"
          fill="currentColor"
        >
          <path
            d="M1177.65,341.532l364.79-387.62,351.67,0.031,0.01,913.117s0.62-.123-0.01.129c-51.56,20.69-99.45,6.035-162.4-18.51L1229.8,622.75C1146.02,567.778,1112.67,423.305,1177.65,341.532Z"
            transform="translate(-1143.5)"
          />
        </svg>
      </div>
      <div className="slider-seven__round__shape-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 750 715"
          fill="currentColor"
        >
          <path
            d="M993.646,179.532l364.794-387.62,351.67,0.031,0.01,913.118s0.62-.124-0.01.128c-51.56,20.69-99.45,6.036-162.4-18.51L1045.8,460.75C962.023,405.779,928.675,261.3,993.646,179.532Z"
            transform="translate(-959.5)"
          />
        </svg>
      </div>
      <div className="slider-seven__round">
        <div
          className="slider-seven__round__image"
          style={{
            backgroundImage: `url(${
              require(`@/images/update-01-10-2021/slider/${bg}`).default.src
            })`,
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="slider-seven__content">
          <h3 className="slider-seven__title">
            {title.split(" ").map((t, i) => (
              <Fragment key={i}>
                {t === titleHighlight ? <span>{t}</span> : t}{" "}
              </Fragment>
            ))}
          </h3>
          <p className="slider-seven__text">{text}</p>
          <a href="#" className="slider-seven__btn thm-btn__seven">
            Get Started
          </a>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleSliderSeven;
