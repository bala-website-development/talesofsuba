import { useEffect, useState } from "react";
import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentBox from "./CommentBox";
import axios from "axios";
import config from "../../config.json";
import uuid from "react-uuid";

const { id, slug, image, date, author, title, text1, text2, text3, text4, text5, comments, tags, category, posts, inputs } = blogDetails;
const commentform = [
  {
    name: "username",
    placeholder: "Your Name",
    type: "text",
    required: true,
  },
  // {
  //   name: "email",
  //   placeholder: "Email Address",
  //   type: "email",
  //   required: true,
  // },
  // {
  //   name: "phone",
  //   placeholder: "Phone Number",
  //   type: "text",
  //   required: true,
  // },
  // {
  //   name: "subject",
  //   placeholder: "Subject",
  //   type: "text",
  //   required: true,
  // },
  {
    name: "message",
    placeholder: "Your Comments",
    required: true,
  },
];

const BlogDetails = (singleblog) => {
  console.log("blogg singleblog", singleblog);
  const [blog, setBlog] = useState(singleblog.singleblog);
  const [blogrecent, setBlogRecent] = useState([]);
  const [comments, setComments] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    commentform.forEach(({ name }) => (data[name] = formData.get(name)));
    (data.postid = blog.id), (data.id = uuid()), (data.type = "comments"), (data.isactive = 1), (data.website = "talesofsuba.com"), console.log(data);

    fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", { method: "POST", headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }, mode: "no-cors", body: JSON.stringify(data) })
      .then((response) => response)
      .then((data) => {
        console.log("comment submit", data.status);
        if (data.status == 200 || data.status == 0) {
          alert("Comments Saved Sucessfully");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("commnets", err);
      });
  };

  useEffect(() => {
    const getComments = async () => {
      const id = "comments";
      try {
        await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/itemsbytype/" + id)
          .then((response) => response.json())
          .then((data) => {
            let dataObject = data;
            console.log("comments", dataObject);
            let _filter = dataObject.filter((_d) => _d.isactive === 1 && _d.postid === blog.id);
            //localStorage.setItem("talesofsubabook", JSON.stringify(dataObject));
            setComments(_filter);
            return;
          })
          .catch((err) => {
            console.log("getComments error", err);
          });
      } catch (er) {
        console.log("getComments error", er);
      }
    };
    getComments();
  }, []);

  return (
    <div className="blog-details service-details">
      <div className="post-details service-details">
        {blog || (blog && blog.length === 0) ? (
          <div className="inner-box">
            <div className="image-box1">
              <Link href="#">
                <a>
                  <Image width="auto" src={blog?.thumbnail} alt="" />
                </a>
              </Link>
            </div>
            <div className="lower-box">
              <div className="post-meta">
                <ul className="clearfix">
                  <li>
                    <span className="far fa-clock"></span> {blog?.date}
                  </li>
                  <li>
                    <span className="far fa-user-circle"></span> {blog.author === "" || blog.author === undefined ? "tales of suba" : blog.author}
                  </li>
                  <li>
                    <span className="far fa-comments"></span> {comments.length}
                  </li>
                  <li>
                    <div>
                      {blog.link?.includes("/a>") ? (
                        <div dangerouslySetInnerHTML={{ __html: blog.link }} />
                      ) : blog.link === "" || blog.link === undefined ? (
                        ""
                      ) : (
                        <a href={blog.link} target="_blank">
                          Check at Amazon
                        </a>
                      )}
                    </div>
                  </li>
                  <li className="d-none">
                    <span className="far fa-comments"></span> {comments.length} Comments
                  </li>
                </ul>
              </div>
              <h4>{blog?.title}</h4>
              <div className="text-content">
                <div dangerouslySetInnerHTML={{ __html: blog?.description?.replace("<br>", "").replace("<p><br></p>", "").replace("<h3", "<h4") }} />
              </div>
            </div>
          </div>
        ) : (
          <h6>No Post Found</h6>
        )}
        <div className="info-row clearfix d-none"></div>

        <div className="info-row clearfix">
          <div className="tags-info">
            <strong>Tags:</strong>{" "}
            {tags.map((tag, i) => (
              <Fragment key={i}>
                <a href={"/" + tag.toLowerCase().replace(" ", "")}>{tag}</a>
                {tags.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
          <div className="cat-info d-none">
            <strong>Category:</strong>{" "}
            {category.map((cate, i) => (
              <Fragment key={i}>
                <a href="#">{cate}</a>
                {category.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="post-control-two d-none">
        <Row className="clearfix">
          {/* {posts.map((post, i) => (
            <Col key={i} md={6} sm={12} className="control-col">
              <div className="control-inner">
                <h4>
                  <a href="#">{post}</a>
                </h4>
                <a href="#" className="over-link"></a>
              </div>
            </Col>
          ))} */}
        </Row>
      </div>
      <div className="comments-area">
        <div className="comments-title">
          <h3>{comments.length} Comments</h3>
        </div>
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="leave-comments ">
        <div className="comments-title">
          <h3>Leave a comment</h3>
        </div>
        <div className="default-form comment-form">
          <form onSubmit={handleSubmit}>
            <Row className="clearfix">
              {commentform.map(({ name, type, placeholder, required }) => (
                <Col key={name} md={type ? 6 : 12} sm={12} className="form-group">
                  {type ? <input type={type} name={name} placeholder={placeholder} required={required} /> : <textarea name={name} placeholder={placeholder} required={required}></textarea>}
                </Col>
              ))}
              <Col md={12} sm={12} className="form-group">
                <button type="submit" className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Submit Comment</span>
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
