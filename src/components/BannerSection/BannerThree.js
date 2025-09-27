import { bannerOne } from "@/data/bannerSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SlideItemThree from "./SlideItemThree";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider-17",
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const { dayRange, timeRange, socials, bg, bannersTwo } = bannerOne;

const BannerThree = () => {
  const listRef = useRef(null);

  return (
    <section className="banner-section banner-three">
      <div className="left-based-text">
        <div className="base-inner">
          <div className="hours">
            <ul className="clearfix">
              <li>
                <span>{dayRange}</span>
              </li>
              <li>
                <span>{timeRange}</span>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              {socials.map(({ id, title, href }) => (
                <li key={id}>
                  <a href={href}>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="bg-image"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="banner-carousel">
        <TinySlider options={settings} ref={listRef}>
          {bannersTwo.map((banner) => (
            <SlideItemThree key={banner.id} ref={listRef} slide={banner} />
          ))}
        </TinySlider>
      </div>
    </section>
  );
};

export default BannerThree;
