import React, { useState, useEffect, useRef } from "react";
import "./Carousel.component.css";

const Card = ({ title, content, image }) => (
  <div className="cards">
    <div className="service">
      <div className="digital-content">
        <span>{title}</span>
        <p>{content}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
    </div>
  </div>
);

const Carousel = ({ cards, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const totalSlides = cards.length;
  const cardsPerSlide = 4;
  const carouselRef = useRef(null);

  // Create a seamless loop by duplicating cards
  const clonedCards = [
    ...cards.slice(-cardsPerSlide),
    ...cards,
    ...cards.slice(0, cardsPerSlide),
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(handleNext, interval);
    return () => clearInterval(slideInterval);
  }, [interval]);

  // Handle seamless looping
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);

        if (currentIndex === 0) {
          setCurrentIndex(totalSlides);
        } else if (currentIndex === totalSlides + cardsPerSlide) {
          setCurrentIndex(cardsPerSlide);
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides, cardsPerSlide, isAnimating]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper-c" ref={carouselRef}>
        <div
          className="carousel-cards"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsPerSlide + 1
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
          ←
        </button>
        <button className="next-item" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;