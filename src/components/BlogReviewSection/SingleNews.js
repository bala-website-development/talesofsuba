import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleNews = ({ news = {} }) => {
  const { id, slug, thumbnail, date, author, title, description, category, link } = news;
  console.log(link, "link111");
  return (
    <Col lg={4} md={6} sm={12} className="news-block animated fadeInUp">
      <div className="inner-box">
        <div className="image-box1">
          <Link href={"/blogdetails/" + slug}>
            <a>
              <Image src={thumbnail} alt="" />
            </a>
          </Link>
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span className="far fa-clock"></span> {date} <span className="far fa-user-circle"></span>talesofSuBa
              </li>

              <li className="d-none">
                <span className="far fa-comments"></span> Comments
              </li>
            </ul>
          </div>
          <div className="">
            <span>
              {" "}
              <h5>
                <a href={"/blogdetails/" + slug}>{title}</a>
              </h5>
            </span>
          </div>

          <div className="text1">
            <div>{description.substring(0, 100).replace(/(<([^>]+)>)/gi, "")}...</div>
          </div>
          <div>
            {link?.includes("/a>") ? (
              <div dangerouslySetInnerHTML={{ __html: link }} />
            ) : link === "" || link === undefined ? (
              ""
            ) : (
              <a href={link} target="_blank">
                Check at Amazon
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleNews;
