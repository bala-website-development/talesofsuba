import bg from "@/images/background/image-7.jpg";
import Link from "next/link";
import React from "react";
import config from "../../config";

const PageBanner = ({ title = "", page = "", parent = "", parentHref = "/" }) => {
  return (
    <section className="page-banner">
      <div className="image-layer" style={{ backgroundImage: "url(" + config.aboutusimage + ")" }}></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>{title}</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref}>{parent}</Link>
                  </li>
                )}
                <li className="active">{page || title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
