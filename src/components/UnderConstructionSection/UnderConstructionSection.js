import { socials } from "@/data/header";
import { underConstructionSection } from "@/data/underConstructionSection";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import CountdownOne from "../Reuseable/CountdownOne";

const { bg, logo, logoTitle, tagline, title, text } = underConstructionSection;

const UnderConstructionSection = () => {
  return (
    <section className="under-construction">
      <div
        className="under-construction__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="auto-container text-center">
        <div className="logo">
          <Link href="/">
            <a title={logoTitle}>
              <Image
                src={logo.src}
                width={134}
                id="dLogo"
                className="main-logo"
                alt={logoTitle}
                title={logoTitle}
              />
            </a>
          </Link>
        </div>
        <h3 className="under-construction__tagline">{tagline}</h3>
        <h2 className="under-construction__title">{title}</h2>
        <CountdownOne
          leadingZeros
          deadlineDate="dynamicHour"
          className="under-construction__countdown"
        />
        <p className="under-construction__text">{text}</p>
        <div className="under-construction__social">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href} className={icon}></a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderConstructionSection;
