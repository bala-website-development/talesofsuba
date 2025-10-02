import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SinglePortfolio = ({ portfolio = {} }, ref) => {
  const { image, category, title } = portfolio;

  return (
    <div ref={ref} className="item">
      <div className="portfolio-horizontal__card">
        <a className="lightbox-image">
          <Image
            src={
              require(`@/images/update-26-02-2021/portfolio/${image}`).default
                .src
            }
            alt=""
          />
        </a>
        <span className="portfolio-horizontal__category">{category}</span>
        <h3 className="portfolio-horizontal__card__title">
          <Link href="/portfolio-single-3">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default forwardRef(SinglePortfolio);
