import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const NewsBlockTwo = ({ news = {}, handleOpen }) => {
  const { image, date, admin, comments, title, text, showVideo } = news;

  return (
    <div className="news-block-two">
      <div className="inner-box">
        <div className="image-box">
          <Link href="/blog-details">
            <a>
              <Image src={require(`@/images/resource/${image}`).default.src} alt="" />
            </a>
          </Link>
          {showVideo && (
            <a onClick={handleOpen} className="vid-link lightbox-image">
              <div className="icon">
                <span className="flaticon-play-button-1"></span>
              </div>
            </a>
          )}
        </div>
        <div className="lower-box">
          <div className="post-meta">
            <ul className="clearfix">
              <li>
                <span className="far fa-clock"></span> {date}
              </li>
              <li>
                <span className="far fa-user-circle"></span> {admin}
              </li>
              <li>
                <span className="far fa-comments"></span> {comments} Comments
              </li>
            </ul>
          </div>
          <h4>
            <Link href="/blog-details">{title}</Link>
          </h4>
          <div className="text">{text}</div>
          <div className="link-box">
            <Link href="/blog-details">
              <a className="theme-btn">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlockTwo;
