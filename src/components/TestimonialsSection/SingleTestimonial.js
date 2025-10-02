import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial = (
  { testimonial = {}, className = "", userSelect = false },
  ref
) => {
  const { image, name, text, designation } = testimonial;

  return (
    <div
      ref={ref}
      style={{ userSelect: userSelect ? "auto" : "none" }}
      className={`testi-block ${className}`}
    >
      <div className="inner">
        <div className="icon">
          <span>“</span>
        </div>
        <div className="info">
          <div className="image">
            <Link href="/team">
              <a>
                <Image
                  src={require(`@/images/resource/${image}`).default.src}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTestimonial);
