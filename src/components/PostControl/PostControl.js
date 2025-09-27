import React from "react";

const PostControl = () => {
  return (
    <div className="post-control">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="control prev">
            <a href="#">
              <span className="fa fa-angle-left"></span> &nbsp; Previous
            </a>
          </div>
          <div className="control next">
            <a href="#">
              Next &nbsp;<span className="fa fa-angle-right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostControl;
