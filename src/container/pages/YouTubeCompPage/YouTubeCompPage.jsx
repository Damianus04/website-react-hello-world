import React, { Component, Fragment } from "react";
import YouTubeComp from "../../../component/YouTubeComponent/YouTubeComp";

class YouTubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <p>YouTube Component</p>
        <hr />
        <YouTubeComp
          time="7.12"
          title="Tutorial React JS - Part 1"
          desc="2x watched, 2 days ago"
        />
      </Fragment>
    );
  }
}

export default YouTubeCompPage;
