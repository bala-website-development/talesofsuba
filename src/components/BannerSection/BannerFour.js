import { bannerFour } from "@/data/bannerSection";
import Link from "next/link";
import React from "react";
import TextSplit from "../Reuseable/TextSplit";

const { dayRange, timeRange, socials, title, text } = bannerFour;

const BannerFour = () => {
  return (
    <section className="banner-four">
      <div className="banner-four__info">
        <span>{dayRange}</span>
        <span>{timeRange}</span>
      </div>
      <div className="banner-four__social">
        {socials.map(({ id, href, icon }) => (
          <a key={id} href={href}>
            <i className={icon}></i>
          </a>
        ))}
      </div>
      <div className="auto-container">
        <h2 className="banner-four__title">
          <TextSplit text={title} />
        </h2>
        <p className="banner-four__text">
          {text} <Link href="/about">html template</Link>
        </p>

        <a
          href="#brand-portfolio"
          className="scroll-to-target banner-four__scroll"
        >
          <i className="linoor-icon-dots-menu"></i>
        </a>
      </div>
    </section>
  );
};

export default BannerFour;
