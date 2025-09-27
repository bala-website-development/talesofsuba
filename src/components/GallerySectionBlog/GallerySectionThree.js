import { gallerySectionThree } from "@/data/gallerySection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, title, items } = gallerySectionThree;

const GallerySectionThree = () => {
  return (
    <section className="gallery-block-three">
      <div className="auto-container">
        <div className="sec-title-two text-center">
          <p>{tagline}</p>
          <h2>{title}</h2>
        </div>
        <Row>
          {items.map(({ id, title, tagline, image }) => (
            <Col key={id} sm={12} md={6} lg={4}>
              <div className="gallery-item-three">
                <Image
                  src={
                    require(`@/images/update-1-12-2020/projects/${image}`)
                      .default.src
                  }
                  alt=""
                />
                <div className="gallery-item-three__content">
                  <p>{tagline}</p>
                  <h3>
                    <Link href="/portfolio-single">{title}</Link>
                  </h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default GallerySectionThree;
