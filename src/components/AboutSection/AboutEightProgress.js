import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const AboutEightProgress = ({ progress = {} }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const { text, count } = progress;

  return (
    <div className="about-eight__progress">
      <div className="about-eight__progress-top">
        <p>{text}</p>
      </div>
      <ReactVisibilitySensor
        offset={{ top: 10 }}
        delayedCall={true}
        onChange={onVisibilityChange}
      >
        <div className="about-eight__progress-line count-box">
          <span
            style={{ width: countStart ? `${count}%` : 0 }}
            className="count-bar"
          >
            <b>
              <i className="count-text">
                <CountUp start={0} end={countStart ? count : 0} duration={2} />
              </i>
              %
            </b>
          </span>
        </div>
      </ReactVisibilitySensor>
    </div>
  );
};

export default AboutEightProgress;
