import { useState } from "react";
import './Carousel.component.css'
const Card = ({ title, category, image }) => (
  <div className="card">
    <div className="card-category">{category}</div>
    <h3 className="card-title">{title}</h3>
    <img src={image} alt={title} className="card-image" />
  </div>
);

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - cardsPerSlide : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 === cards.length - cardsPerSlide ? 0 : prev + 1));
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerSlide);
  return (
    <div className="carousel">
      
      <div className="carousel-cards">
        {visibleCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div>
        <button className="arrow left-arrow" onClick={handlePrev}>&lt;</button>
        <button className="arrow right-arrow" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Carousel;