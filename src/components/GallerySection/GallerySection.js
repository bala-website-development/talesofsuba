import gallerySection from "@/data/gallerySection";
import React, { useState } from "react";
import ProductTab from "./ProductTab";

const { title, tabBtns, pTabs, pTabs2 } = gallerySection;

const GallerySection = ({ className = "", carousel = "" }) => {
  const [current, setCurrent] = useState("p-tab-1");
  const newPTabs = carousel ? pTabs2 : pTabs;

  return (
    <section className={`gallery-section-two ${className}`}>
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>
      </div>
      <div className="project-tab">
        <div className="auto-container">
          <div className="tab-btns-box">
            <div className="tabs-header">
              <ul className="product-tab-btns clearfix">
                {tabBtns.map(({ id, name, tab, count }) => (
                  <li
                    key={id}
                    onClick={() => setCurrent(tab)}
                    className={`p-tab-btn${
                      current === tab ? " active-btn" : ""
                    }`}
                  >
                    {name}
                    <sup>[{count}]</sup>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={className ? "auto-container" : ""}>
          <div className="p-tabs-content">
            {newPTabs.map((tab) => (
              <ProductTab
                carousel={carousel}
                tab={tab}
                key={tab.id}
                current={current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
