import React, { useEffect, useState } from "react";
import newsSection from "@/data/newsSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import { Row } from "react-bootstrap";
import SingleNews from "./SingleNews";
import axios from "axios";
import config from "../../config.json";
const { title, newsData } = newsSection;

const NewsSection = ({ className = "", showTitle = true, isMore = false }) => {
  const ref = useActive("#blog");
  // call service to get blog data

  const [blog, setBlog] = useState([]);
  console.log("ssnblog", blog);
  useEffect(() => {
    console.log("ssnbloginisde");
    const fetchData = async () => {
      console.log("ssnbloginisdefetch");
      const response = await axios.get(process.env.NEXT_PUBLIC_SERVICE_URL + "/blog");
      setBlog(response.data);
      console.log("ssnbloginisde blog single ", response.data);
    };

    fetchData();
  }, []);

  return (
    <section ref={ref} className={`news-section ${className}`} id="blog">
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              {title}
              <span className="dot">.</span>
            </h2>
          </div>
        )}

        <Row className="clearfix">
          {/* {blog.slice(0, showTitle ? 3 : undefined).map((news) => (
            <SingleNews key={news.id} news={news} />
          ))} */}
          {blog?.map((news) => (
            <SingleNews key={news.id} news={news} />
          ))}
        </Row>
        {isMore && (
          <div className="more-box">
            <Link href="#">
              <a className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Load more posts</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
