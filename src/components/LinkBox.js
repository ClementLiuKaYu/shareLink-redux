import React from "react";
import "./LinkBox.css";

const LinkBox = (props) => {
  return (
    <div className="linkBox">
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.name}
      </a>
      <br />
      <h6>Tags:</h6>
      {props.tags.map((tag, index) => (
        <span key={index} className="badge badge-primary">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default LinkBox;
