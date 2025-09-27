import { eventsDetails } from "@/data/eventsSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const {
  date,
  image,
  title,
  texts,
  time,
  year,
  category,
  phone,
  email,
  address,
} = eventsDetails;

const EventsDetails = () => {
  return (
    <section className="events-details">
      <div className="auto-container">
        <div className="events-one__image">
          <div className="events-one__date">{date}</div>
          <Image src={image.src} alt="" />
        </div>
        <Row>
          <Col lg={8}>
            <div className="events-details__content">
              <h3 className="events-one__title">{title}</h3>
              {texts.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <Link href="/contact">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Register Now</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={4} className="events-details__sidebar">
            <Row>
              <Col lg={12}>
                <div className="events-details__widget events-details__widget-info">
                  <ul className="list-unstyled">
                    <li>
                      <strong>Starting Time</strong>
                      <span>{time}</span>
                    </li>
                    <li>
                      <strong>Date</strong>
                      <span>
                        {date}, {year}
                      </span>
                    </li>
                    <li>
                      <strong>Category</strong>
                      <span>{category}</span>
                    </li>
                    <li>
                      <strong>Phone</strong>
                      <span>
                        <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                      </span>
                    </li>
                    <li>
                      <strong>Email</strong>
                      <span>
                        <a href={`mailto:${email}`}>{email}</a>
                      </span>
                    </li>
                    <li>
                      <strong>Location</strong>
                      <span>
                        <TextSplit text={address} />
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={12}>
                <div className="events-details__widget events-details__widget-map">
                  <iframe
                    className="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230899.1642407818!2d145.06327708904033!3d-37.792102974783376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cd0db468a97%3A0xb61fde84306fc38a!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1592307685926!5m2!1sen!2s"
                    style={{ border: 0 }}
                    aria-hidden={false}
                    tabIndex={0}
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EventsDetails;
