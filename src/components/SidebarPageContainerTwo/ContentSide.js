import { blogPage } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React from "react";
import NewsBlockTwo from "./NewsBlockTwo";

const { title, text, newsData } = blogPage;

const ContentSide = ({ handleOpen }) => {
  return (
    <>
      <div className="blog-posts">
        {newsData.map((news) => (
          <NewsBlockTwo key={news.id} news={news} handleOpen={handleOpen} />
        ))}
        <div className="news-block-three">
          <div className="inner-box">
            <div className="quote-icon">
              <span>“</span>
            </div>
            <div className="text">{text}</div>
            <Link href="/blog-single">
              <a className="over-link"></a>
            </Link>
          </div>
        </div>

        <div className="news-block-three">
          <div className="inner-box">
            <div className="link-icon">
              <span className="flaticon-link-2"></span>
            </div>
            <h4>
              <Link href="/blog-single">{title}</Link>
            </h4>
            <Link href="/blog-single">
              <a className="over-link"></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="more-box">
        <Link href="/blogs">
          <a className="theme-btn btn-style-one">
            <i className="btn-curve"></i>
            <span className="btn-title">Load more posts</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ContentSide;
