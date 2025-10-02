import { useRootContext } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SubItem = ({ subItem = {} }) => {
  const [active, setActive] = useState(false);
  const { menuStatus } = useRootContext();
  const { subItems, href, name, isNew } = subItem;
  const { pathname } = useRouter();

  const handleActive = (e) => {
    e.preventDefault();
    setActive((preActive) => !preActive);
  };

  return (
    <li
      className={`${subItems?.length ? "dropdown" : ""} ${
        pathname === href ? "current" : ""
      }`}
    >
      <Link href={href}>
        <a href={href}>
          {name} {isNew && <span>new</span>}
          {subItems?.length && (
            <div
              onClick={handleActive}
              className={`dropdown-btn${active ? " open" : ""}`}
            >
              <span className="fa fa-angle-right"></span>
            </div>
          )}
        </a>
      </Link>
      <ul style={{ display: !menuStatus || active ? "block" : "none" }}>
        {subItems?.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
              <a href={item.href}>
                {item.name} {item.isNew && <span>new</span>}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const NavItem = ({ navItem = {}, mobile = false, onePage = false }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useRouter();
  const { menuStatus, toggleMenu, currentActive } = useRootContext();

  const { name, href, subNavItems = [] } = navItem;
  const subHref = subNavItems.map((item) => item.href);
  const current = !onePage
    ? pathname === href || subHref.includes(pathname)
    : currentActive === href;

  const handleActive = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActive((preActive) => !preActive);
  };

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href}>
        <a
          onClick={() => mobile && href.includes("#") && toggleMenu()}
          href={href}
        >
          {name}{" "}
          {subNavItems.length > 0 && (
            <div
              onClick={handleActive}
              className={`dropdown-btn${active ? " open" : ""}`}
            >
              <span className="fa fa-angle-right"></span>
            </div>
          )}
        </a>
      </Link>
      {subNavItems.length > 0 && (
        <ul
          style={{
            display: !menuStatus || active ? "block" : "none",
          }}
        >
          {subNavItems.map((subItem) => (
            <SubItem key={subItem.id} subItem={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
