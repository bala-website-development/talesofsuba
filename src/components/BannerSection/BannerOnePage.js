import { bannerOnePage } from "@/data/bannerSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useRef, useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider-16",
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
};

const BannerOnePage = () => {
  const [isOpen, setOpen] = useState(false);

  const listRef = useRef(null);

  const ref = useActive("#home");

  return (
    <>
      <section
        ref={ref}
        className="banner-section banner-one banner-one-page"
        id="home"
      >
        <div className="banner-carousel">
          <TinySlider options={settings} ref={listRef}>
            {bannerOnePage.map(({ id, title, bg, subtitle }) => (
              <div key={id} ref={listRef}>
                <div className="slide-item">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url(${
                        require(`@/images/main-slider/${bg}`).default.src
                      })`,
                    }}
                  ></div>

                  <div className="auto-container">
                    <div className="content-box">
                      <div className="content">
                        <div className="inner text-center">
                          <div className="sub-title">{subtitle}</div>
                          <h1>
                            Discover <br /> <span>{title}</span>
                          </h1>
                          <div className="link-box">
                            <Link href="/about">
                              <a className="theme-btn btn-style-one">
                                <i className="btn-curve"></i>
                                <span className="btn-title">Discover More</span>
                              </a>
                            </Link>
                            <div className="vid-link">
                              <a
                                onClick={() => setOpen(true)}
                                className="lightbox-image"
                              >
                                <div className="icon">
                                  <span className="flaticon-play-button-1"></span>
                                  <i className="ripple"></i>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TinySlider>
          <div className="tns-controls">
            <button className="tns-prev">
              <span className="icon fa fa-angle-left"></span>
            </button>
            <button className="tns-next">
              <span className="icon fa fa-angle-right"></span>
            </button>
          </div>
        </div>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={"Get7rqXYrbQ"} />
    </>
  );
};

export default BannerOnePage;
