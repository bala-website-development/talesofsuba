import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const responsive1 = {
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
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
};

const responsive2 = {
  600: {
    items: 1,
    gutter: 30,
  },
  768: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
};

const settings = {
  loop: false,
  lazyload: true,
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

const ProductTab = ({ tab = {}, current, carousel = "" }) => {
  const listRef = useRef(null);

  const { id, items } = tab;

  return (
    <div className={`p-tab${current === id ? " active-tab" : ""}`} id={id}>
      <div className={carousel || "project-carousel"}>
        <TinySlider
          options={{
            ...settings,
            container: `.my-slider-${id}`,
            nav: !carousel,
            responsive: carousel ? responsive2 : responsive1,
          }}
          ref={listRef}
        >
          {items.map(({ id, image, title, tagline }) => (
            <div ref={listRef} className="gallery-item" key={id}>
              <div className="inner-box">
                <figure className="image">
                  <Image
                    src={require(`@/images/gallery/${image}`).default.src}
                    alt=""
                  />
                </figure>
                <a
                  className="lightbox-image overlay-box"
                  data-fancybox="gallery"
                ></a>
                <div className="cap-box">
                  <div className="cap-inner">
                    <div className="cat">
                      <span>{tagline}</span>
                    </div>
                    <div className="title">
                      <h5>
                        <Link href="/portfolio-single">{title}</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TinySlider>
      </div>
    </div>
  );
};

export default ProductTab;
