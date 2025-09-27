import featuresSection from "@/data/featuresSection";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
import TextSplit from "../Reuseable/TextSplit";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, title, features } = featuresSection;

const FeaturesSection = () => {
  return (
    <Jarallax speed={0.3} imgPosition="50% 50%" className="features-section">
      <JarallaxImage src={bg.src} />
      <div className="auto-container">
        <div className="content-box">
          <h2>
            {title}
            <span>.</span>
          </h2>
          <div className="features clearfix">
            {features.map(({ id, title, icon }) => (
              <div key={id} className="feature-block">
                <div className="inner">
                  <div className="icon-box">
                    <span className={icon}></span>
                  </div>
                  <h6>
                    <TextSplit text={title} />
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <div className="link-box">
            <Link href="/about">
              <a className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Discover More</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Jarallax>
  );
};

export default FeaturesSection;
