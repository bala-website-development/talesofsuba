import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";

const MapBox = dynamic(() => import("../MapSection/MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <section ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">
        <div className="sec-title centered d-none">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>

        <div className="upper-info">
          <Row className="clearfix">
            {contacts.map(({ id, name, address, email, instagram, iconins, iconemail, iconyt, youtube }) => (
              <Col key={id} xl={6} lg={6} md={6} sm={12} className="info-block animated fadeInUp">
                <div className="inner-box">
                  <h5>{name}</h5>
                  <div className="text--">
                    <div className="side-menu__social">
                      <a key={id} href={instagram} target="blank">
                        <i className={iconins}></i>
                      </a>
                      <a key={id} href={youtube} target="blank">
                        <i className={iconyt}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {map && <MapBox />}
        {form && <FormBox inputs={inputs} />}
      </div>
    </section>
  );
};

export default ContactSection;
