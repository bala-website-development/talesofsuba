import { historyTimeline } from "@/data/historySection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const HistoryTimeline = () => {
  return (
    <section className="history-timeline">
      <div className="auto-container">
        {historyTimeline.map(({ id, year, items }) => (
          <div key={id} className="history-timeline__card">
            <span className="history-timeline__year">{year}</span>
            {items.map(({ id, date, title, text, image }) => (
              <Row key={id}>
                <Col md={12} lg={6}>
                  <div className="history-timeline__info">
                    <span className="history-timeline__date">{date}</span>
                    <h3 className="history-timeline__title">{title}</h3>

                    <p className="history-timeline__text">{text}</p>
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  {image && (
                    <div className="history-timeline__image">
                      <Image
                        src={
                          require(`@/images/update-26-02-2021/resources/${image}`)
                            .default.src
                        }
                        alt=""
                      />
                    </div>
                  )}
                </Col>
              </Row>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistoryTimeline;
