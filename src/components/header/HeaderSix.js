import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { title, phone, socials, logo6, email } = headerData;

const HeaderSix = () => {
  const { toggleMenu } = useRootContext();

  return (
    <header className="header-six">
      <div className="auto-container">
        <div className="header-six__logo">
          <Link href="/index-main">
            <a>
              <Image src={logo6.src} width={134} alt={title} />
            </a>
          </Link>

          <div onClick={toggleMenu} className="mobile-nav-toggler">
            <span className="icon flaticon-menu-2"></span>
            <span className="txt">Menu</span>
          </div>
        </div>

        <div className="header-six__social">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div>

        <div className="header-six__info">
          <a
            href={`tel:${phone.split(" ").join("")}`}
            className="header-six__info__link"
          >
            <i className="flaticon-call"></i>
            {phone}
          </a>

          <a href={`mailto:${email}`} className="header-six__info__link">
            <i className="flaticon-email-2"></i>
            {email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderSix;
