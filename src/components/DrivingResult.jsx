import React, { useState, useEffect } from "react";
import "./DrivingResult.component.css";
import ProgressBar from "./ProgressBar";

const DrivingResult = () => {

  const DrivingResultData = [
    {
      image: "/discover.png",
      content:
        "“1 EMB Global's strategies, execution, and ideas sped up our goals. They instilled trust throughout, from start to finish, with flawless work, follow-up, and communication. Collaborating with them was smooth, easy, and aligned wiith our needs.”",
      name: "Pawan",
      position: "CEO",
      progress: "Agent Shortlisting",
    },
    {
      image: "/discover.png",
      content:
        "“2 EMB Global's strategies, execution, and ideas sped up our goals. They instilled trust throughout, from start to finish, with flawless work, follow-up, and communication. Collaborating with them was smooth, easy, and aligned wiith our needs.”",
      name: "Pawan",
      position: "CEO",
      progress: "Agent Shortlisting",
    },
    {
      image: "/discover.png",
      content:
        "“3 EMB Global's strategies, execution, and ideas sped up our goals. They instilled trust throughout, from start to finish, with flawless work, follow-up, and communication. Collaborating with them was smooth, easy, and aligned wiith our needs.”",
      name: "Pawan",
      position: "CEO",
      progress: "Agent Shortlisting",
    },
    {
      image: "/discover.png",
      content:
        "“4 EMB Global's strategies, execution, and ideas sped up our goals. They instilled trust throughout, from start to finish, with flawless work, follow-up, and communication. Collaborating with them was smooth, easy, and aligned wiith our needs.”",
      name: "Pawan",
      position: "CEO",
      progress: "Agent Shortlisting",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start transition effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === DrivingResultData.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false); // End transition effect
      }, 500); // Transition duration (match CSS)
    }, 3000); // Auto-rotate every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [DrivingResultData]);

  return (
    <>
    <div style={{margin:"100px 0px"}}>
      {/* Testimonial Section */}
      <div className={`driving-content ${isTransitioning ? "fade" : ""}`}>
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
      <div style={{ display: "flex", justifyContent: "center",margin:"40px 20px" }}>
        <ProgressBar currentIndex={currentIndex} />
      </div>
      </div>
    </>
  );
};

export default DrivingResult;
