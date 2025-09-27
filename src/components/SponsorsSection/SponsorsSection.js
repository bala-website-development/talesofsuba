import sponsors from "@/data/sponsorsSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  loop: false,
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
  responsive: {
    600: {
      items: 2,
      gutter: 30,
    },
    768: {
      items: 3,
      gutter: 30,
    },
    992: {
      items: 4,
      gutter: 30,
    },
    1200: {
      items: 5,
      gutter: 30,
    },
  },
};

const SponsorsSection = ({ className = "" }) => {
  const listRef = useRef(null);

  return (
    <section className={`sponsors-section ${className}`}>
      <div className="sponsors-outer">
        <div className="auto-container">
          <div className="sponsors-carousel">
            <TinySlider
              options={{ ...settings, container: `.my-slider-15` }}
              ref={listRef}
            >
              {sponsors.map((image, index) => (
                <div
                  ref={listRef}
                  key={index}
                  className="slide-item text-center"
                >
                  <figure className="image-box">
                    <a href="#">
                      <Image
                        src={
                          require(`@/images/clients/${
                            className.includes("dark") ? "dark-1.png" : image
                          }`).default.src
                        }
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
