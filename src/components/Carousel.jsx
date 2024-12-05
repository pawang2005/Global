import { useState, useEffect, useRef } from "react";
import "./Carousel.component.css";

const Card = ({ title, content, image }) => (
  <div className="cards">
    <h3
      className="card-t"
      style={{ margin: "10px", fontSize: "20px", fontWeight: "100" }}
    >
      {title}
    </h3>
    <h3
      className="card-content"
      style={{ margin: "10px", fontSize: "30px", fontWeight: "400" }}
    >
      {content}
    </h3>
    <img src={image} alt={title} className="card-image" />
  </div>
);

const Carousel = ({ cards, interval = 2000, cardsperslide = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(cardsperslide);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = cards.length;
  const carouselRef = useRef(null);

  // Create a seamless loop by duplicating cards
  const clonedCards = [
    ...cards.slice(-cardsperslide), // Clone last cards at the beginning
    ...cards,
    ...cards.slice(0, cardsperslide), // Clone first cards at the end
  ];

  const handlePrev = () => {
    if (isAnimating) return; // Prevent animation interruptions
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isAnimating) return; // Prevent animation interruptions
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext(); // Automatically move to the next card
    }, interval);

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [interval]);

  // Handle seamless looping
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);

        // Snap to the original cards when reaching the cloned ones
        if (currentIndex === 0) {
          setCurrentIndex(totalSlides);
        } else if (currentIndex === totalSlides + cardsperslide) {
          setCurrentIndex(cardsperslide);
        }
      }, 300); // Match with CSS transition duration
      return () => clearTimeout(timeout);
    } 
  }, [currentIndex, totalSlides, cardsperslide, isAnimating]);

  return (
    <>
      <div className="carousel-wrapper" ref={carouselRef}>
        <div
          className="carousel-cards"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsperslide
            }%)`,
            transition: isAnimating ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {clonedCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="arrow-content">
        <button className="prev-item" onClick={handlePrev}>
          +
        </button>
        <button className="next-item" onClick={handleNext}>
          -
        </button>
      </div>
    </>
  );
};

export default Carousel;
