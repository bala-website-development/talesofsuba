import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { year, author, logo6, about2, socials, links } = mainFooter;

const FooterSix = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <>
      <section className="footer-six">
        <div className="auto-container">
          <Row>
            <Col sm={12} md={12} lg={3}>
              <div className="footer-six__widget footer-six__about">
                <Link href="/">
                  <a>
                    <Image src={logo6.src} width={135} alt="" />
                  </a>
                </Link>
                <p className="footer-six__about__text">{about2}</p>
                <div className="footer-six__social">
                  {socials.map(({ id, icon, href }) => (
                    <a key={id} href={href}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <div className="footer-six__widget footer-six__links">
                <h3 className="footer-six__title">Explore</h3>
                <div className="footer-six__links__list">
                  <ul className="footer-six__links__list__item">
                    {links.slice(0, 5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-six__links__list__item">
                    {links.slice(5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm={12} md={12} lg={5}>
              <div className="footer-six__widget footer-six__newsletter">
                <h3 className="footer-six__title">Newsletter</h3>
                <form
                  onSubmit={handleSubmit}
                  className="footer-six__newsletter__form"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                  <p>
                    I agree to all <a href="#">terms and policies</a>{" "}
                  </p>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="footer-six__copyright">
        <div className="auto-container">
          <p>
            © Copyright {year} by {author}
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterSix;
