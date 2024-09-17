import React from "react";
import "./Builder.css";

const Builder = (props) => {
  return (
    <div className="builder">{props.title}</div>,
    <button> Add</button>,
    <button> Remove</button>
  );
};

export default Builder;
