import { useRef, useState, useEffect} from 'react'
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
    { image: "/brand.png" },
    { image: "/brand.png" },
  ];
  const interval = 2000;
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
      }, 300); 
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides, cardsperslide, isAnimating]);
 return( <div className="slider2">
  <div className="slide-track2">
    {
      allLogos.map((logo, index)=>{
        return (
          <div key={index} className="slide2" >
            <img src={logo.image} alt="" style={{padding:"0 5% 0 5%",width: "100% !important",margin: "auto !important",height: "auto !important"}} height="100" width="250" />
          </div>
        )
      })
    }
  </div>
</div>
 )
}

export default BrandSlider;