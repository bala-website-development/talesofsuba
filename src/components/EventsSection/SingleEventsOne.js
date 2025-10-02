import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleEventsOne = ({ event = {} }) => {
  const { title, image, date, time, address } = event;

  return (
    <Col md={6} lg={4}>
      <div className="events-one__item">
        <div className="events-one__image">
          <div className="events-one__date">{date}</div>
          <Link href="/event-details">
            <a>
              <Image
                src={
                  require(`@/images/update-09-06-2021/events/${image}`).default
                    .src
                }
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="events-one__content">
          <h3 className="events-one__title">
            <Link href="/event-details">{title}</Link>
          </h3>
          <ul className="events-one__meta list-unstyled">
            <li>
              <i className="far fa-clock"></i>
              {time}
            </li>
            <li>
              <i className="far fa-map"></i>
              {address}
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default SingleEventsOne;
