import { portfolioHorizontalTwo } from "@/data/portfolioHorizontal";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import SinglePortfolioTwo from "./SinglePortfolioTwo";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".portfolio-horizontal-2",
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
  responsive: {
    600: {
      items: 2,
      gutter: 30,
    },
    992: {
      items: 3,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 40,
    },
    1500: {
      items: 4,
      gutter: 50,
    },
    1600: {
      items: 5,
      gutter: 50,
    },
  },
};

const total = portfolioHorizontalTwo.length / 2;

const PortfolioHorizontalTwo = () => {
  const [slider, setSlider] = useState(null);
  const [current, setCurrent] = useState(1);
  const listRef = useRef(null);

  useEffect(() => {
    if (slider) {
      const generateAndSetResult = (result = 0) => {
        let newResult = result;
        if (newResult > total) {
          newResult = newResult - total;
          generateAndSetResult(newResult);
        } else {
          setCurrent(newResult);
        }
      };
      slider.events.on("indexChanged", ({ index }) => {
        generateAndSetResult(index - 4);
      });
    }
  }, [slider]);

  return (
    <section className="portfolio-horizontal-two">
      <div className="portfolio-horizontal-two__carousel position-relative">
        <TinySlider
          options={settings}
          ref={listRef}
          slider={slider}
          setSlider={setSlider}
        >
          {portfolioHorizontalTwo.map((portfolio) => (
            <SinglePortfolioTwo
              ref={listRef}
              key={portfolio.id}
              portfolio={portfolio}
            />
          ))}
        </TinySlider>
      </div>
      <div className="portfolio-horizontal-two__controls">
        <ul className="portfolio-horizontal-two__carousel__progress list-unstyled">
          {Array.from(Array(total)).map((_, i) => (
            <li key={i} className={i + 1 === current ? "active" : ""}>
              <span></span>
            </li>
          ))}
        </ul>
        <div className="portfolio-horizontal-two__carousel__count">
          <span className="current-number">0{current}</span>
          <span className="sep">/</span>
          <span className="counted-number">0{total}</span>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHorizontalTwo;
