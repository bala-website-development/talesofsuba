import { projectEight } from "@/data/projectSection";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

const { tagline, title, projects } = projectEight;

const ProjectEight = () => {
  return (
    <section className="project-eight">
      <div className="auto-container">
        <div className="sec-title-eight text-center">
          <p className="sec-title-eight__text">{tagline}</p>
          <h2 className="sec-title-eight__title">{title}</h2>
        </div>
        <Swiper {...options} className="thm-swiper__slider">
          <div className="swiper-wrapper">
            {projects.map(({ id, image, title }) => (
              <SwiperSlide key={id}>
                <div className="project-eight__item">
                  <Image
                    src={
                      require(`@/images/update-01-10-2021/project/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="project-eight__content">
                    <Link href="/portfolio-single">
                      <a className="project-eight__link">
                        <i className="flaticon-right-arrow"></i>
                      </a>
                    </Link>
                    <h3 className="project-eight__title">
                      <Link href="/portfolio-single">{title}</Link>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectEight;
