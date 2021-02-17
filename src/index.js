import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
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
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
