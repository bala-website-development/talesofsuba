import { callToSectionThree } from "@/data/callToSection";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, title } = callToSectionThree;

const CallToSectionThree = () => {
  return (
    <Jarallax
      className="call-to-section-three"
      speed={0.3}
      imgPosition="50% 80%"
    >
      <JarallaxImage src={bg.src} />
      <div className="auto-container">
        <h3>{title}</h3>
        <div className="button-wrap">
          <Link href="/about">
            <a className="theme-btn btn-style-three">Discover More</a>
          </Link>
        </div>
      </div>
    </Jarallax>
  );
};

export default CallToSectionThree;
