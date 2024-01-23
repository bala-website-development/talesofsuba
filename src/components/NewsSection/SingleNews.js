import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { id, thumbnail, date, author, title, description } = news;

  return (
    <Col lg={4} md={6} sm={12} className="news-block animated fadeInUp">
      <div className="inner-box">
        <div className="image-box">
          <Link href={"/blog-single?id=" + id}>
            <a>
              <Image src={thumbnail} alt="" />
            </a>
          </Link>
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span className="far fa-clock"></span> {date}
              </li>
              <li>
                <span className="far fa-user-circle"></span> talesofSuBa
              </li>
              <li className="d-none">
                <span className="far fa-comments"></span> Comments
              </li>
            </ul>
          </div>
          <h5>
            <Link href={"/blog-single?id=" + id}>{title}</Link>
          </h5>
          <div className="text">
            {/* <div style={{ color: "#2ecc71", fontSize: "12px" }} dangerouslySetInnerHTML={{ __html: description }} /> */}
            <div style={{ fontSize: "Normal" }} dangerouslySetInnerHTML={{ __html: description.substring(0, 100) }} />
          </div>
          <div className="link-box">
            <Link href={"/blog-single?id=" + id}>
              <a className="theme-btn">
                <span className="flaticon-next-1"></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
