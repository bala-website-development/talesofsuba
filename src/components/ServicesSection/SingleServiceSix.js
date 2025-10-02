import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleServiceSix = ({ service = {} }) => {
  const { image, title, href, icon, text } = service;

  return (
    <Col sm={12} md={6} lg={4} className="animated fadeInUp">
      <div className="service-six__item">
        <div className="service-six__image">
          <Image
            src={
              require(`@/images/update-01-10-2021/services/${image}`).default
                .src
            }
            alt=""
          />
        </div>
        <div className="service-six__content">
          <div className="service-six__icon">
            <i className={icon}></i>
          </div>
          <h3 className="service-six__title">
            <Link href={href}>{title}</Link>
          </h3>
          <div className="service-six__text">{text}</div>
        </div>
      </div>
    </Col>
  );
};

export default SingleServiceSix;
