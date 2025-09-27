import { sliderEight } from "@/data/slider";
import React from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper } from "swiper/react";
import SingleSliderEight from "./SingleSliderEight";

SwiperCore.use([Autoplay, EffectFade]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: { delay: 5000 },
};

const SliderEight = () => {
  return (
    <section className="slider-eight">
      <Swiper {...options} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {sliderEight.map((slide) => (
            <SingleSliderEight key={slide} slide={slide} />
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default SliderEight;
