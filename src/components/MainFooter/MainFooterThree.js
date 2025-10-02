import { mainFooter } from "@/data/mainFooter";
import React from "react";

const { year, author, socials, address, phone, email, title, bg } = mainFooter;

const MainFooterThree = () => {
  return (
    <footer
      className="main-footer main-footer__two"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="auto-container">
        <div className="footer-widget text-center">
          <h3>{title}</h3>
          <p>
            <a href={`tel:${phone.split(" ").join("-")}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>{address.split("\n")[0]}</span>
          </p>
          <ul className="social-links clearfix">
            {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <a href={href}>
                  <span className={icon}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              &copy; copyright {year} by {author}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooterThree;
