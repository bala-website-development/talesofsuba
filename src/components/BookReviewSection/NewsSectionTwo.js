import { newsSectionTwo } from "@/data/newsSection";
import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import SingleNewsTwo from "./SingleNewsTwo";

SwiperCore.use([Pagination, Autoplay]);

const options = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  slidesPerGroup: 2,
  pagination: {
    el: "#news-two-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
  },
};

const { tagline, title, newses } = newsSectionTwo;

const NewsSectionTwo = () => {
  return (
    <section className="news-two">
      <div className="auto-container">
        <div className="sec-title-two text-center">
          <p>{tagline}</p>
          <h2>{title}</h2>
        </div>
        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper">
            {newses.map((news) => (
              <SingleNewsTwo key={news.id} news={news} />
            ))}
          </div>
          <div className="swiper-pagination" id="news-two-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSectionTwo;
