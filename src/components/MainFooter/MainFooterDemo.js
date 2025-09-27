import { mainFooterDemo } from "@/data/mainFooter";
import React from "react";

const { demoBg, title, tagline, year, author, templateLink } = mainFooterDemo;

const MainFooterDemo = () => {
  return (
    <footer
      className="main-footer main-footer__two main-footer__demo"
      style={{ backgroundImage: `url(${demoBg.src})` }}
    >
      <div className="auto-container">
        <div className="footer-widget text-center">
          <h3>{title}</h3>
          <p>{tagline}</p>
          <a
            className="theme-btn btn-style-one demo-purchase-btn"
            href={templateLink}
          >
            <i className="btn-curve"></i>
            <span className="btn-title">Purchase template</span>
          </a>
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

export default MainFooterDemo;
