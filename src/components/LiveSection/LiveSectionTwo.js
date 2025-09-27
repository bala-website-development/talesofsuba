import { liveSectionTwo } from "@/data/liveSection";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, tagline, title, videoId } = liveSectionTwo;

const LiveSectionTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Jarallax className="live-section-two" speed={0.3} imgPosition="50% 80%">
        <JarallaxImage src={bg.src} />
        <div className="auto-container">
          <div className="sec-title-two">
            <p>{tagline}</p>
            <h2>{title}</h2>
          </div>
          <div className="button-block">
            <a onClick={() => setOpen(true)} className="lightbox-image">
              <div className="icon">
                <span className="flaticon-play-button-1"></span>
              </div>
            </a>
          </div>
        </div>
      </Jarallax>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default LiveSectionTwo;
