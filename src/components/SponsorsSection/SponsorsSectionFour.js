import { sponsorsSectionFour } from "@/data/sponsorsSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, sponsors } = sponsorsSectionFour;

const SponsorsSectionFour = () => {
  return (
    <section className="sponsors-section-four">
      <div className="auto-container">
        <Row>
          {sponsors.map((image, i) => (
            <Col key={i} md={6} lg={4}>
              <div className="image-box">
                <a href="#">
                  <Image
                    src={
                      require(`@/images/update-09-06-2021/brand/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>

        <div className="content-box text-center">
          <h3>
            <TextSplit text={title} />
          </h3>
          <Link href="/contact">
            <a className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Contact with us</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSectionFour;
