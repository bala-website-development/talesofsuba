import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleBox = ({ box = {} }) => {
  const { image, tagline, title, isNew, href, filter, col = 4 } = box;

  return (
    <Col md={6} lg={col} className={`all ${filter} animated fadeInUp`}>
      <div className="portfolio-masonary__box-outer">
        {isNew && <span className="portfolio-masonary__box__new">New</span>}
        <div className="portfolio-masonary__box">
          <Image
            width={370}
            height={426}
            src={require(`@/images/demo/${image}`).default.src}
            alt=""
          />
          <div className="portfolio-masonary__box-content">
            <Link href={href}>
              <a className="link">
                <i className="flaticon-right-arrow"></i>
              </a>
            </Link>
            <p>{tagline}</p>
            <h4>
              <Link href={href}>{title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBox;
