import { videoSix } from "@/data/videoSection";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, title, videoId, text } = videoSix;

const VideoSix = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-six">
        <Jarallax
          className="video-six__parallax"
          speed={0.3}
          imgPosition="50% 80%"
        >
          <JarallaxImage src={bg.src} />
          <div className="video-six__parallax__inner">
            <div className="auto-container">
              <div className="video-six__inner">
                <h3 className="video-six__title">{title}</h3>
                <div className="video-six__video">
                  <h3 className="video-six__video__text">{text}</h3>
                  <a
                    onClick={() => setOpen(true)}
                    className="lightbox-image video-six__btn"
                  >
                    <i className="fa fa-play"></i>
                    <i className="ripple"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Jarallax>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoSix;
