import React from "react";
import "./progress-spinner.css";

const Spinner = (props) => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <span>{props.title}</span>
    </div>
  );
};
export default Spinner;
