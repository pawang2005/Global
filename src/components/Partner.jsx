import "./Partner.component.css";
import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import Blog from "./Blog";
import BrandSlider from "./BrandSlider";
const Partner = () => {
  
  const interval = 2000;
  const [currentIndexContainer, setCurrentIndexContainer] = useState(0);

  const handleNextContainer = () => {
    setCurrentIndexContainer((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrevContainer = () => {
    setCurrentIndexContainer((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextContainer(); // Automatically move to the next card
    }, interval);

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [interval]);

  
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
        <BrandSlider></BrandSlider>
      </div>

      <div className="why-emb">
        <div className="why-emb-header">
          <h2>Why EMB?</h2>
        </div>
        <div className="why-emb-reason">
          <div className="why-emb-image">
            <img src="/project-dashboard.png" alt="" />
          </div>

          <div className="why-emb-text">
            <div className="why-emb-list">
              <div style={{ marginBottom: "30px" }}>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3%" }}
                >
                  <img
                    src="/bullet-point.png"
                    alt=""
                    style={{ marginTop: "10px" }}
                  />
                  <span style={{ fontWeight: "bold" }}>
                    Access our Client Network
                  </span>
                </div>

                <p style={{ fontSize: "22px", marginLeft: "45px" }}>
                  With over 2500 clients from 15 industries, get the opportunity
                  to take up the most rewarding projects and grow with us.
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3%" }}
                >
                  <img
                    src="/bullet-point.png"
                    alt=""
                    style={{ marginTop: "10px" }}
                  />
                  <span style={{ fontWeight: "bold" }}>
                    Access our Client Network
                  </span>
                </div>

                <p style={{ fontSize: "22px", marginLeft: "45px" }}>
                  With over 2500 clients from 15 industries, get the opportunity
                  to take up the most rewarding projects and grow with us.
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "3%" }}
                >
                  <img
                    src="/bullet-point.png"
                    alt=""
                    style={{ marginTop: "10px" }}
                  />
                  <span style={{ fontWeight: "bold" }}>
                    Access our Client Network
                  </span>
                </div>

                <p style={{ fontSize: "22px", marginLeft: "45px" }}>
                  With over 2500 clients from 15 industries, get the opportunity
                  to take up the most rewarding projects and grow with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="board">
        <div className="board-header">
          <h2>How to get on board with us</h2>
        </div>
        <div className="main-cards">
          <div>
            <div className="card-sign">
              <div className="step-badge">
                <div>Step 1</div>
              </div>
              <div className="icon">
                <img src="/user.png" alt="icon" />
              </div>
              <h3>
                Free <br /> sign-up
              </h3>
              <p>
                Register on our Partner Dashboard and have your contact details
                verified instantly.
              </p>
            </div>
          </div>
          <div className="next-step-img">
            <img src="/right.png" alt="" />
          </div>
          <div>
            <div className="card-sign">
              <div className="step-badge">
                <div>Step 2</div>
              </div>
              <div className="icon">
                <img src="/user.png" alt="icon" />
              </div>
              <h3>
                Free <br /> sign-up
              </h3>
              <p>
                Register on our Partner Dashboard and have your contact details
                verified instantly.
              </p>
            </div>
          </div>
          <div className="next-step-img">
            <img src="/right.png" alt="" />
          </div>
          <div>
            <div className="card-sign">
              <div className="step-badge">
                <div>Step 3</div>
              </div>
              <div className="icon">
                <img src="/user.png" alt="icon" />
              </div>
              <h3>
                Free <br /> sign-up
              </h3>
              <p>
                Register on our Partner Dashboard and have your contact details
                verified instantly.
              </p>
            </div>
          </div>
          <div className="next-step-img">
            <img src="/right.png" alt="" />
          </div>
          <div>
            <div className="card-sign">
              <div className="step-badge">
                <div>Step 4</div>
              </div>
              <div className="icon">
                <img src="/user.png" alt="icon" />
              </div>
              <h3>
                Free <br /> sign-up
              </h3>
              <p>
                Register on our Partner Dashboard and have your contact details
                verified instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ width: "100%", maxWidth: "100%", padding: "0" }}
      >
        <div
          className="content-container"
          style={{ flexDirection: "column", width: "50%" }}
        >
          <div>
            <h2>Join our Preferred Partners Programme</h2>
          </div>
          <div>
            <p>
              We proudly offer exclusive benefits to our partners who have
              consistently shown trust in our platform and delivered outstanding
              work.
            </p>
          </div>
          <div>
            These privileges are designed to ensure business stability and
            promise up to 3x returns to our partners.
          </div>
        </div>
        <div>
          <img src="/join.png" alt="" />
        </div>
      </div>

        

      <div className="testimonial-container-algo">
      {/* Heading */}
      <h1 className="testimonial-heading-algo">
        Driving results for leaders across the globe
      </h1>

      {/* Company Logo */}
      <div className="company-logo-algo">
        <img
          src="/brand.png" // Replace with the actual logo URL
          alt="Algosoft Logo"
        />
      </div>

      {/* Testimonial Text */}
      <p className="testimonial-text-algo">
        "Our association with EMB Global has carved out new revenue streams for
        our company by enabling us to take on unlimited projects which we had
        to give up earlier due to bandwidth or unserviceability."
      </p>

      {/* Author Details */}
      <div className="testimonial-author-algo">
        <p className="author-name">Vivek</p>
        <p className="author-designation">Director, Algosoft</p>
      </div>
    </div>


      <div className="slider-container-algo-outer">
        <div className="left-button">
        <button
          className="slider-button-algo left"
          onClick={handlePrevContainer}
        >
          -
        </button>
        </div>
  
        <div className="slider-container-algo"> 
          <div className="slider-algo">
            <div
              className="slider-track-algo"
              style={{
                transform: `translateX(-${currentIndexContainer * 100}%)`,
              }}
            >
              <Container number={1} />
              <Container number={2} />
              <Container number={3} />
            </div>
          </div>
        </div>
        <div className="right-button">
        <button
          className="slider-button-algo right"
          onClick={handleNextContainer}
        >
          +
        </button>
        </div>
        
      </div>

      <div>
        <Blog></Blog>
      </div>
    </>
  );
};

export default Partner;
