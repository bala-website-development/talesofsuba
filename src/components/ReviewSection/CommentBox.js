import React from "react";
import { Image } from "react-bootstrap";

const CommentBox = ({ comment = {} }) => {
  const { image, name, date, text, star } = comment;

  return (
    <div className="comment-box">
      <div className="comment">
        <div className="author-thumb">
          <figure className="thumb">
            <Image
              src={require(`@/images/resource/${image}`).default.src}
              alt=""
            />
          </figure>
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="date">{date}</div>
        </div>
        <div className="text">{text}</div>
        <div className="reply-btn">
          {Array.from(Array(star)).map((_, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
