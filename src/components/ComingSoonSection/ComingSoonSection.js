import { comingSoonSection } from "@/data/comingSoonSection";
import { socials } from "@/data/header";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import CountdownOne from "../Reuseable/CountdownOne";

const { bg, logo, logoTitle, title, text, formTitle, formText } =
  comingSoonSection;

const ComingSoonSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <section
      className="coming-soon"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="auto-container">
        <Row>
          <Col lg={7}>
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <a title={logoTitle}>
                    <Image
                      src={logo.src}
                      id="thm-logo"
                      alt={logoTitle}
                      width={134}
                      height={34}
                      title={logoTitle}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <h3 className="coming-soon__title">{title}</h3>
            <p className="coming-soon__text">{text}</p>
            <ul
              className="countdown-one__list list-unstyled"
              data-leading-zeros="true"
              data-enable-days="true"
              data-deadline-date="dynamicDate"
            ></ul>
            <CountdownOne
              leadingZeros
              deadlineDate="dynamicDate"
              className="coming-soon__countdown"
            />
            <h3 className="coming-soon__form-title">{formTitle}</h3>
            <p className="coming-soon__form-text">{formText}</p>
            <form onSubmit={handleSubmit} className="coming-soon__form">
              <input
                type="email"
                placeholder="Email Address"
                required
                name="email"
              />
              <button type="submit">
                <span className="fa fa-envelope"></span>
              </button>
            </form>
            <ul className="coming-soon__social list-unstyled">
              {socials.map(({ id, icon, href }) => (
                <li key={id}>
                  <a href={href}>
                    <span className={icon}></span>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ComingSoonSection;
