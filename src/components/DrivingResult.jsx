import React, { useState, useEffect } from "react";
import "./DrivingResult.component.css";

const DrivingResult = ({ DrivingResultData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === DrivingResultData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [DrivingResultData]);

  return (
    <>
      {/* Testimonial Section */}
      <div className="driving-content">
        <div className="image-content">
        <img
            src={DrivingResultData[currentIndex].image}
            alt={`Testimonial ${currentIndex}`}
            className="testimonial-image"
          />
        </div>
        <div className="testimonial">
         
          <p className="testimonial-content">
            {DrivingResultData[currentIndex].content}
          </p>
          <h4 className="testimonial-name">
            {DrivingResultData[currentIndex].name}
          </h4>
          <p className="testimonial-position">
            {DrivingResultData[currentIndex].position}
          </p>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="progress-bars">
        {DrivingResultData.map((data, index) => (
          <div
            key={index}
            className={`progress-items ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <span>{data.progress}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DrivingResult;
