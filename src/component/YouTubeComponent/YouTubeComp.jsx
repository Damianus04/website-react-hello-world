import React, { Component } from "react";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <p className="img-thumb">
        <img
          src="https://i.ytimg.com/vi/tPcgHxHtFhQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC5r64bn7HRzlgyF-ArdjxGAJetvw"
          alt=""
        />
        <p className="time">{props.time}</p>
      </p>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "xx ditonton. x hari yang lalu",
};

export default YouTubeComp;
