import { blogSeven } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBlogSeven from "./SingleBlogSeven";

const BlogSeven = () => {
  return (
    <section className="blog-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Latest News & <span>Articles</span>
            <br />
            from the Blog
          </h2>
        </div>
        <Row>
          {blogSeven.map((blog) => (
            <SingleBlogSeven blog={blog} key={blog.id} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogSeven;
