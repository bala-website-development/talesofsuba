import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTeam = ({ team = {}, className = "" }, ref) => {
  const { image, name, designation, socials } = team;

  return (
    <div ref={ref} className={`team-block ${className}`}>
      <div className="inner-box">
        <div className="image-box">
          <Link href="/about">
            <a>
              <Image
                src={require(`@/images/resource/${image}`).default.src}
                alt=""
              />
            </a>
          </Link>
          <ul className="social-links clearfix">
            {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <a href={href}>
                  <span className={icon}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lower-box">
          <h5>
            <a href="#">{name}</a>
          </h5>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTeam);
