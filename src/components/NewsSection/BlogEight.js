import { blogEight } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import BlogEightSingle from "./BlogEightSingle";

const { tagline, title, blogs } = blogEight;

const BlogEight = () => {
  return (
    <section className="blog-eight">
      <div className="auto-container">
        <div className="sec-title-eight text-center">
          <p className="sec-title-eight__text">{tagline}</p>
          <h2 className="sec-title-eight__title">{title}</h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <BlogEightSingle key={blog.id} blog={blog} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogEight;
