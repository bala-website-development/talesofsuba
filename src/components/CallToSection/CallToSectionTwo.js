import Link from "next/link";
import React from "react";

const CallToSectionTwo = ({
  className = "",
  btnClassName = "btn-style-two",
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <h2>
            We’re Ready to Bring Bigger <br />& Stronger Projects
          </h2>
          <div className="link-box">
            <Link href="/contact">
              <a className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span className="btn-title">Contact with us</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToSectionTwo;
