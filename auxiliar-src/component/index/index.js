import "./Index.css";
import React, { Component } from "react";

class Index extends Component {
  render() {
    return (
      <>
        <div className="container index py-1">
          <h1 className="text-center">Academic control UNSAAC</h1>
        </div>
        <div className="container info">
          <h4 className="text-center">
            a personal application, for the management of courses and notes of
            the professional school of computer science and systems, as part of
            a practice using a javascript library called Reactjs.
          </h4>
        </div>
      </>
    );
  }
}

export default Index;
