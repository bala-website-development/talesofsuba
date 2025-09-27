import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SinglePortfolioTwo = ({ portfolio = {} }, ref) => {
  const { image, title, category } = portfolio;

  return (
    <div className="item">
      <div ref={ref} className="portfolio-horizontal-two__item">
        <div className="portfolio-horizontal-two__image">
          <Link href="/portfolio-single-3">
            <a>
              <Image
                src={
                  require(`@/images/update-09-06-2021/portfolio/${image}`)
                    .default.src
                }
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="portfolio-horizontal-two__content">
          <span className="portfolio-horizontal-two__category">{category}</span>
          <h3 className="portfolio-horizontal-two__title">
            <Link href="/portfolio-single-3">{title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SinglePortfolioTwo);
