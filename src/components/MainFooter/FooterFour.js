import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { socials, logo5 } = mainFooter;

const FooterFour = () => {
  return (
    <section className="footer-four">
      <div className="auto-container">
        <div className="logo-box">
          <Link href="/index-main">
            <a>
              <Image
                src={logo5.src}
                width={136}
                height={35}
                alt="Linoor HTML Template"
              />
            </a>
          </Link>
        </div>
        <div className="footer-four__social">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterFour;
