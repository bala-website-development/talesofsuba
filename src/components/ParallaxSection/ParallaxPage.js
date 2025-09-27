import { parallaxPage } from "@/data/parallaxSection";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const ParallaxPage = () => {
  return (
    <>
      {parallaxPage.map(({ id, bg, title }) => (
        <Jarallax
          key={id}
          className="parallax-block"
          speed={0.3}
          imgPosition="50% 100%"
        >
          <JarallaxImage
            src={require(`@/images/background/${bg}`).default.src}
          />
          <div className="auto-container">
            <div className="parallax-block__content">
              <h3>{title}</h3>
              <Link href="/portfolio">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Discover More</span>
                </a>
              </Link>
            </div>
          </div>
        </Jarallax>
      ))}
    </>
  );
};

export default ParallaxPage;
