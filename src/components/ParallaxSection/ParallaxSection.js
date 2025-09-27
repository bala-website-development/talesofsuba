import parallaxSection from "@/data/parallaxSection";
import dynamic from "next/dynamic";
import React from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, icon, title, title2 } = parallaxSection;

const ParallaxSection = () => {
  return (
    <Jarallax speed={0.3} imgPosition="50% 80%" className="parallax-section">
      <JarallaxImage src={bg.src} />
      <div className="auto-container">
        <div className="content-box">
          <div className="icon-box">
            <span className={icon}></span>
          </div>
          <h2>
            {title} <span>{title2}</span>
          </h2>
        </div>
      </div>
    </Jarallax>
  );
};

export default ParallaxSection;
