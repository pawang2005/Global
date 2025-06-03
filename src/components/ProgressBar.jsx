import React from "react";
import "./ProgressBar.component.css";

const ProgressBar = ({ currentIndex }) => {
  return (
    <div className="progress-container">
      {["End-to-end project delivery", "Agency shortlisting", "Expert tech consultancy", "Pre-vetted developers"].map(
        (label, index) => (
          <div key={index} className="progress-item-container">
            <div
              className={`progress-bar ${
                index === currentIndex ? "active" : ""
              }`}
            ></div>
            <div
              className={`progress-item ${
                index === currentIndex ? "active-label" : ""
              }`}
            >
              {label}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProgressBar;
