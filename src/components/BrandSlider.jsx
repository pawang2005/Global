import { useRef, useState, useEffect } from 'react';
import './BrandSlider.component.css';

const BrandSlider = () => {
  const allLogos = [
    { image: "/brand.png" },
    { image: "/emerging.png" },
    { image: "/brand.png" },
    { image: "/brand.png" },
    { image: "/cloud.png" },
    { image: "/brand.png" },
    { image: "/emerging.png" },
    { image: "/marketing.png" },
    { image: "/brand.png" },
    { image: "/brand.png" },
    { image: "/discover.png" },
    { image: "/brand.png" },
    { image: "/brand.png" },
    { image: "/brand.png" },
  ];

  const interval = 2000;
  const [cardsperslide, setCardsPerSlide] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(cardsperslide);
  const totalSlides = allLogos.length;

  const updateCardsPerSlide = () => {
    if (window.innerWidth <= 480) setCardsPerSlide(1);
    else if (window.innerWidth <= 768) setCardsPerSlide(2);
    else setCardsPerSlide(4);
  };

  useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  return (
    <div className="slider2">
      <div className="slide-track2">
        {allLogos.map((logo, index) => (
          <div key={index} className="slide2">
            <img src={logo.image} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
