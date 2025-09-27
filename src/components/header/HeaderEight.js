import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { navItems, title, title3, logo8, socials, email, address, phone2 } =
  headerData;

const HeaderEight = () => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className="header-eight">
      <div className="header-eight__topbar">
        <div className="auto-container">
          <ul className="header-eight__topbar__info">
            <li>
              <i className="flaticon-email-2"></i>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <i className="flaticon-pin-1"></i>
              {address}
            </li>
          </ul>
          <div className="header-eight__topbar__right">
            <p>{title3}</p>
            <div className="header-eight__topbar__social">
              {socials.map(({ id, icon, href }) => (
                <a key={id} href={href} className={icon}></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`mainmenu-eight main-header${
          scrollTop ? " fixed-header" : ""
        }`}
      >
        <div className="auto-container">
          <div className="nav-outer mainmenu-eight__inner ">
            <div className="mainmenu-eight__left">
              <Link href="/index-main">
                <a>
                  <Image src={logo8.src} width={134} alt={title} />
                </a>
              </Link>
              <div onClick={toggleMenu} className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  {navItems.map((navItem) => (
                    <NavItem navItem={navItem} key={navItem.id} />
                  ))}
                </ul>
              </div>
            </nav>

            <div className="mainmenu-eight__right">
              <div className="search-btn mainmenu-eight__search">
                <button
                  onClick={toggleSearch}
                  type="button"
                  className="theme-btn search-toggler"
                >
                  <span className="flaticon-magnifying-glass"></span>
                </button>
              </div>

              <a
                href={`tel:${phone2.split(" ").join("")}`}
                className="mainmenu-eight__call"
              >
                <span className="mainmenu-eight__call__icon">
                  <i className="flaticon-phone"></i>
                </span>
                <span className="mainmenu-eight__call__text">
                  Have any questions? <br />
                  Free: <strong>{phone2}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderEight;
