import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { title, navItems, socials, logo10 } = headerData;

const HeaderThree = () => {
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <>
      <header className="main-header header-style-nine">
        <div className="header-style-nine__inner">
          <div className="logo-box">
            <Link href="/index-main">
              <a>
                <Image src={logo10.src} width={35} height={34} alt={title} />
              </a>
            </Link>
          </div>
          <div className="nav-outer clearfix">
            <div onClick={toggleMenu} className="mobile-nav-toggler">
              <span></span>
              <span></span>
              <span></span>
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
          </div>
          <div onClick={toggleSearch} className="search-btn search-toggler">
            <button type="button">
              <span className="flaticon-loupe"></span>
            </button>
            <span className="text">Search</span>
          </div>
          <div className="social-icons">
            {socials.map(({ id, icon, href }) => (
              <a key={id} href={href}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </header>
      <div
        onClick={toggleSearch}
        className="search-btn search-toggler header-style-nine__search-btn__outer"
      >
        <button type="button">
          <span className="flaticon-loupe"></span>
        </button>
        <span className="text">Search</span>
      </div>
    </>
  );
};

export default HeaderThree;
