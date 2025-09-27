import contactInfos from "@/data/contactInfos";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { year, author, dayRanges, address, email, phone } = contactInfos;

const ContactInfos = () => {
  return (
    <section className="contact-infos">
      <div className="auto-container">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <p>
              {dayRanges.map((day, i) => (
                <Fragment key={i}>
                  {day} <br />
                </Fragment>
              ))}
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <p>
              <TextSplit text={address} />
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <p>
              <a href={`mailto:${email}`}>{email}</a> <br />{" "}
              <a href={`tel:${phone.split(" ").join("-")}`}>{phone}</a>
            </p>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <p>
              © copyright {year} by <br />
              {author}
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactInfos;
