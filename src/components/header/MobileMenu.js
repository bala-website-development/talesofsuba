import NavItem from "@/components/header/NavItem";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import React from "react";
import { Image } from "react-bootstrap";

const { icon, text, email, phone, socials, navItems, navItemsTwo } = headerData;

const MobileMenu = ({ onePage = false }) => {
  const { menuStatus, toggleMenu } = useRootContext();

  const newNavItems = onePage ? navItemsTwo : navItems;

  return (
    <div className={`side-menu__block${menuStatus ? " active" : ""}`}>
      <div onClick={toggleMenu} className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner">
        <div className="side-menu__top justify-content-end">
          <a onClick={toggleMenu} className="side-menu__toggler side-menu__close-btn">
            <Image src={icon.src} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
            <ul className="navigation clearfix">
              {newNavItems.map((navItem) => (
                <NavItem navItem={navItem} key={navItem.id} mobile />
              ))}
            </ul>
          </div>
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>{text}</p>
          <div className="side-menu__social">
            {socials.map(({ id, icon, href }) => (
              <a key={id} href={href}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
