import { sponsorsSectionThree } from "@/data/sponsorsSection";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 140,
  slidesPerView: 5,
  autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5,
    },
  },
};

const SponsorsSectionThree = () => {
  return (
    <div className="sponsors-section-three">
      <div className="auto-container">
        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper">
            {sponsorsSectionThree.map((image, i) => (
              <SwiperSlide key={i}>
                <Image src={image.src} alt="" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SponsorsSectionThree;
