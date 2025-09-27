import { portfolioHorizontal } from "@/data/portfolioHorizontal";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import SinglePortfolio from "./SinglePortfolio";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".portfolio-horizontal-1",
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".tns-controls",
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
      gutter: 30,
    },
    1500: {
      items: 4,
      gutter: 30,
    },
    1600: {
      items: 4,
      gutter: 30,
    },
  },
};

const { images, portfolios } = portfolioHorizontal;

const PortfolioHorizontal = () => {
  const listRef = useRef(null);

  return (
    <section className="portfolio-horizontal">
      {images.map((image, i) => (
        <Image
          key={i}
          src={
            require(`@/images/update-26-02-2021/shapes/${image}`).default.src
          }
          className={`portfolio-horizontal__shape-${i + 1}`}
          alt=""
        />
      ))}
      <div className="auto-container">
        <div className="portfolio-horizontal__carousel position-relative">
          <TinySlider options={settings} ref={listRef}>
            {portfolios.map((portfolio) => (
              <SinglePortfolio
                ref={listRef}
                key={portfolio.id}
                portfolio={portfolio}
              />
            ))}
          </TinySlider>
          <div className="tns-controls">
            <button className="tns-prev">
              <span className="icon nav-button-left"></span>
            </button>
            <button className="tns-next">
              <span className="icon nav-button-right"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHorizontal;
