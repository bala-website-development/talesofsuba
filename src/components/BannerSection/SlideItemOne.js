import Link from "next/link";
import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";

const SlideItemOne = ({ slide = {} }, ref) => {
  const { bg, subtitle, title } = slide;

  return (
    <div ref={ref} style={{ userSelect: "none" }} className="slide-item">
      <div
        className="image-layer"
        style={{
          backgroundImage: "url(" + bg + ")",
        }}
      ></div>
      <div className="left-top-line"></div>
      <div className="right-bottom-curve"></div>
      <div className="right-top-curve"></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <div className="sub-title">{subtitle}</div>
              <h1>
                <TextSplit text={title} />
              </h1>
              <div className="link-box">
                <Link href="/bookreviews">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Discover More</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemOne);
