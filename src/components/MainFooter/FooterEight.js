import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { year, author, socials, address2, phone2, email, about3, logo8 } = mainFooter;

const FooterEight = () => {
  return (
    <>
      <footer className="footer-eight">
        <div className="auto-container">
          <Row>
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">About</h3>
                <p>
                  <TextSplit text={about3} />
                </p>
              </div>
            </Col>
            {/* <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">Address</h3>
                <p>
                  <TextSplit text={address2} />
                </p>
              </div>
            </Col> */}
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">Contact</h3>
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                  <br />
                  <a href={`tel:${phone2.split(" ").join("")}`}>{phone2}</a>
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">Follow</h3>
                <div className="footer-eight__social">
                  {socials.map(({ id, icon, href }) => (
                    <a key={id} href={href} className={icon}></a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-eight__copyright">
        <div className="auto-container">
          <Link href="/index-main">
            <a>
              <Image src={logo8.src} width={101} alt="" />
            </a>
          </Link>
          <p>
            © Copyright {year} by {author}
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterEight;
