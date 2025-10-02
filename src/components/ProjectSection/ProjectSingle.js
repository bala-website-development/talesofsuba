import { projectSingle } from "@/data/projectSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { images, title, text, clients, category, date, text2 } = projectSingle;

const ProjectSingle = ({ portfolio = 1 }) => {
  return (
    <section className={`project-single${portfolio === 2 ? " style-two" : ""}`}>
      <div className="auto-container">
        <Row className="clearfix">
          <Col
            lg={portfolio === 2 ? 12 : 8}
            md={12}
            sm={12}
            className={portfolio === 2 ? "" : "image-col"}
          >
            <div className={portfolio === 2 ? "" : "inner"}>
              {images
                .slice(0, portfolio === 2 ? 1 : undefined)
                .map((image, i) => (
                  <figure key={i} className="image-box">
                    <a className="lightbox-image" data-fancybox="gallery">
                      <Image
                        src={require(`@/images/resource/${image}`).default.src}
                        alt=""
                      />
                    </a>
                  </figure>
                ))}
            </div>
          </Col>
          <Col
            lg={portfolio === 2 ? 12 : 4}
            md={12}
            sm={12}
            className={portfolio === 2 ? "" : "text-col"}
          >
            <div className={portfolio === 2 ? "" : "inner"}>
              <div className="text-content">
                <Row>
                  <Col lg={portfolio === 2 ? 8 : 12} md={12} sm={12}>
                    <div className={portfolio === 2 ? "inner" : ""}>
                      <h5>{title}</h5>
                      <p>{text}</p>
                      {portfolio === 2 && <p>{text2}</p>}
                    </div>
                  </Col>
                  <Col lg={portfolio === 2 ? 4 : 12} md={12} sm={12}>
                    <div className={portfolio === 2 ? "inner" : ""}>
                      <ul className="info">
                        <li>
                          <strong>Clients:</strong> <br />
                          {clients}
                        </li>
                        <li>
                          <strong>Category:</strong> <br />
                          {category}
                        </li>
                        <li>
                          <strong>Date:</strong> <br />
                          {date}
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProjectSingle;
