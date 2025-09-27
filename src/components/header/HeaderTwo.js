import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { navItems, title, logo7 } = headerData;

const HeaderTwo = ({ headerStyle = "mainmenu-six", header = 6 }) => {
  const { scrollTop } = useScroll(120);
  const { toggleSearch, toggleMenu } = useRootContext();

  return (
    <nav
      className={`${headerStyle} main-header${
        scrollTop ? " fixed-header" : ""
      }`}
    >
      <div className="auto-container">
        <div className={`${headerStyle}__inner nav-outer`}>
          {header === 7 && (
            <div className="mainmenu-seven__left">
              <Link href="/index-main">
                <a>
                  <Image src={logo7.src} width={134} alt={title} />
                </a>
              </Link>
            </div>
          )}
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
          {header === 6 ? (
            <div className="mainmenu-six__right">
              <div className="search-btn mainmenu-six__search">
                <button
                  onClick={toggleSearch}
                  type="button"
                  className="theme-btn search-toggler"
                >
                  <span className="flaticon-magnifying-glass"></span>
                </button>
              </div>
              <Link href="/contact">
                <a className="thm-btn__six mainmenu-six__btn">
                  Get a Free Quote
                </a>
              </Link>
            </div>
          ) : (
            header === 7 && (
              <div className="mainmenu-seven__right">
                <div className="search-btn mainmenu-seven__search">
                  <button
                    onClick={toggleSearch}
                    type="button"
                    className="theme-btn search-toggler"
                  >
                    <span className="flaticon-magnifying-glass"></span>
                  </button>
                </div>
                <div
                  onClick={toggleMenu}
                  className="mainmenu-seven__right__toggler mobile-nav-toggler"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderTwo;
