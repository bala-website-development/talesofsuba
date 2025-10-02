import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import TextSplit from "../Reuseable/TextSplit";

const CounterBlockTwo = ({ counter = {} }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const { title, percent } = counter;

  return (
    <Col md={6} lg={3}>
      <div className="counter-block">
        <div className="inner-box">
          <div className="graph-outer">
            <VisibilitySensor
              offset={{ top: 10 }}
              delayedCall={true}
              onChange={onVisibilityChange}
            >
              <>
                <div style={{ width: 140, height: 140 }}>
                  <CircularProgressbar
                    strokeWidth={2.5}
                    value={countStart ? percent : 0}
                    styles={{
                      path: {
                        stroke: "#ffaa17",
                        strokeLinecap: "butt",
                      },
                      text: {
                        fill: "#222429",
                        fontWeight: 400,
                        fontSize: 20,
                        fontFamily: "Teko, sans-serif",
                        letterSpacing: "0.05em",
                      },
                      trail: {
                        stroke: "#e9ebee",
                      },
                    }}
                  />
                </div>
                <div className="inner-text count-box">
                  <span className="count-text">
                    <CountUp
                      start={0}
                      end={countStart ? percent : 0}
                      duration={1}
                    />
                  </span>
                  <span className="sign">%</span>
                </div>
              </>
            </VisibilitySensor>
          </div>
          <h4>
            <TextSplit text={title} />
          </h4>
        </div>
      </div>
    </Col>
  );
};

export default CounterBlockTwo;
