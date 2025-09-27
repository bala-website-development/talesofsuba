import { bannerTwo } from "@/data/bannerSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SlideItem from "./SlideItem";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider-1",
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
};

const BannerSection = () => {
  const listRef = useRef(null);

  return (
    <section className="banner-section banner-two">
      <div className="banner-carousel">
        <TinySlider options={settings} ref={listRef}>
          {bannerTwo.map((slide) => (
            <SlideItem key={slide.id} slide={slide} ref={listRef} />
          ))}
        </TinySlider>
      </div>
    </section>
  );
};

export default BannerSection;
