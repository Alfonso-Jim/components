import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Growling Brostion
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00pm</span>
        </div>
        <div className="text">Nice postio brolio!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
