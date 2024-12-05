import "./Partner.component.css";
import { useState, useEffect , useRef} from 'react'
const Partner = () => {
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
    { image: "/brand.png" },
    { image: "/brand.png" },
  ];
  const interval = 2000
  const cardsperslide = 4;
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(cardsperslide);
  const totalSlides = allLogos.length;
  const carouselRef = useRef(null);

  
  const clonedCards = [
    ...allLogos.slice(-cardsperslide), // Clone last cards at the beginning
    ...allLogos,
    ...allLogos.slice(0, cardsperslide), // Clone first cards at the end
  ];
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
      <div className="container">
        <div className="content-container" style={{ flexDirection: "column" }}>
          <div>
            <h2>Join our partner network</h2>
          </div>
          <div>
            <h3>
              Get verified with us and like 1000+ of our partners, see your
              agency soar by as much as 35%. Our platform is your gateway to
              assured growth.
            </h3>
          </div>
          <div>
            <button className="contact-sales">Join us →</button>
          </div>
        </div>
        <div className="image-container">
          <img src="/partners.png" alt="" />
        </div>
      </div>
      <div className="brands">
        <div className="brand-header">
          <h2>Brands that Believe in us</h2>
        </div>
        <div className="brand-slider" ref={carouselRef}>
          <div className="slider-track" style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsperslide
            }%)`,
            transition: isAnimating ? "transform 0.3s ease-in-out" : "none",
          }}>
            {clonedCards.map((logo, index) => (
              <div className="slide" key={index} >
                <img src={logo.image} alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
