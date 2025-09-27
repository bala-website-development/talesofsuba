import { sidebar } from "@/data/sidebarPageContainer";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const { title, title2, text, phone, navItems } = sidebar;

const SidebarSide = () => {
  const { pathname } = useRouter();

  return (
    <aside className="sidebar blog-sidebar">
      <div className="sidebar-widget services">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>{title}</h4>
          </div>
          <ul>
            {navItems.map(({ id, href, title }) => (
              <li key={id} className={pathname === href ? "active" : ""}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-widget call-up">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>{title2}</h4>
          </div>
          <div className="text">{text}</div>
          <div className="phone">
            <a href={`tel:${phone.split(" ").join("")}`}>
              <span className="icon flaticon-call"></span>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarSide;
