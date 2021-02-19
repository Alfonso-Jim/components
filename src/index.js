import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Poncho"
        datePosted="Today at 3:25pm"
        commentContent="Hi there!"
        avatarSrc={faker.image.image()}
      />
      <CommentDetail
        author="Steven"
        datePosted="Today at 1:35am"
        commentContent="Hi! nice to meet you"
        avatarSrc={faker.image.image()}
      />
      <CommentDetail
        author="John"
        datePosted="Today at 6:56pm"
        commentContent="This is too formal"
        avatarSrc={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
