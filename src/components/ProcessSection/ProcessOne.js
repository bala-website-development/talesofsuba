import { processOne } from "@/data/processSection";
import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import axios from "axios";
import config from "../../config.json";

const ProcessOne = () => {
  // subhabala

  const [timeline, setTimeline] = useState([]);
  const type = "timeline";
  useEffect(() => {
    console.log("ssnbloginisde");
    const fetchData = async () => {
      console.log("ssntimleineinisdefetch");
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_SERVICE_URL + "/itemsbytype/" + type);
        setTimeline(response.data.sort((b, a) => a.date.localeCompare(b.date)));
        console.log("ssntimleineinisdefetch", response);
      } catch (err) {}
    };

    fetchData();
  }, []);
  return (
    <section className="process-one">
      <div className="auto-container">
        {timeline?.map((tim) => (
          <Row key={1}>
            <Col md={12} lg={6} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image src={tim.thumbnail} alt="talesofsuba" />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="process-one__content">
                <div className="sec-title">
                  <h2>
                    {tim.title} <span className="dot">.</span>
                  </h2>
                  <span className="dot"></span> {tim.date}
                </div>
                <p className="process-one__summery">
                  {" "}
                  <div dangerouslySetInnerHTML={{ __html: tim.description }} />
                </p>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default ProcessOne;
