import React from "react";
import "./style.css";
const Spinner = () => {
  return (
    <div className="progress">
      <div
        className="progress__ring"
        role="progressbar"
        aria-describedby="progress__message"
      ></div>
    </div>
  );
};

export default Spinner;
