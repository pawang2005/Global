import { useState, useEffect } from "react";
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

const Carousel = ({ cards, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // If the new index is less than 0, go to the last card
      return newIndex < 0 ? cards.length - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // If the new index exceeds the last card, wrap around to the first card
      return newIndex >= cards.length ? 0 : newIndex;
    });
  };
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext(); // Automatically move to the next card
    }, interval);

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [currentIndex, interval]);

  return (
    <>
      <div className="carousel-wrapper">
        <div
          className="carousel-cardss"
          style={{
            transform: `translateX(-${(currentIndex / cardsPerSlide) * 100}%)`,
          }}
        >
          {cards.map((card, index) => (
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
