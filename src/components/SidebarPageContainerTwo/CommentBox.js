import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const CommentBox = ({ comment = {} }) => {
  const { image, username, date, message } = comment;

  return (
    <div className="comment-box">
      <div className="comment1">
        {/* <div className="author-thumb d-none">
          <figure className="thumb ">
            <Image src="" alt="" />
          </figure>
        </div> */}
        <div className="info">
          <div className="name">{username}</div>
          <div className="date d-none">{message}</div>
        </div>
        <div className="text">{message}</div>
        <div className="reply-btn d-none">
          <Link href="/about">
            <a className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Reply</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
