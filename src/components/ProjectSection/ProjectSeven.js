import { projectSeven } from "@/data/projectSection";
import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import SingleProject from "./SingleProject";

SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 30,
  slidesPerView: 2,
  autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
};

const ProjectSeven = () => {
  return (
    <section className="project-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Our Recent <span>Projects</span>
            <br />
            List Below.
          </h2>
        </div>
        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper">
            {projectSeven.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSeven;
