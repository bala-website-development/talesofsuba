import { blogSix } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBlogSix from "./SingleBlogSix";

const { tagline, title, blogs } = blogSix;

const BlogSix = () => {
  return (
    <section className="blog-six">
      <div className="auto-container">
        <div className="sec-title-six text-center">
          <p className="sec-title-six__text">
            <span>{tagline}</span>
          </p>
          <h2 className="sec-title-six__title">{title}</h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <SingleBlogSix key={blog.id} blog={blog} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogSix;
