

import "./Home.component.css";
import Blog from "./Blog";
import Carousel from "./Carousel";
import DrivingResult from "./DrivingResult";
import BrandSlider from "./BrandSlider";
import { useState } from "react";
import Form from "./Form";

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    console.log("Toggling Form:", !isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  const cardsData = [
    {
      title: "Software Development1",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development2",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development3",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development4",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development5",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development6",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development7",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development8",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development9",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development10",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
    {
      title: "Software Development11",
      content:
        "A mental health startup leveraged a mobile app for  patient interaction",
      image: "/discover.png",
    },
  ];
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
  const DigitalContent = [
    {
      span: "Discover the Best Agencies",
      p: "We have a network of 1,500+ best-in-class development agencies skilled in building scalable tech solutions across 20+ industries.",
      img: "/discover.png",
    },
    {
      span: "Payment security through Escrow",
      p: "Take the leap of faith easily with our escrow services, where payments are only released after you consent.",
      img: "/discover.png",
    },
    {
      span: "End-to-end project management",
      p: "Get a reliable project manager who will offer comprehensive support and ensures that your project stays consistently on track.",
      img: "/discover.png",
    },
  ];
  const global = {
    project: 4500,
    client: 2500,
    country: 23,
  };

  return (
    <>
      <div className="container">
        <div className="content-container">
          <h2>Empowering businesses on their digital journey</h2>
          <h3>
            We help businesses unlock exponential growth by finding the right
            tech solutions.
          </h3>
          <button className="contact-sales" onClick={toggleFormVisibility}>
            Contact Sales →
          </button>
          {isFormVisible && (
            <Form
              isFormVisible={isFormVisible}
              onClose={() => setIsFormVisible(false)}
            />
          )}
        </div>
        <div className="image-container">
          <img src="/empowering.png" alt="Empowering businesses" />
        </div>
      </div>

      <div className="trust">
        <h2>Trusted by the best in the business</h2>
        <div className="brand-slider-logo">
          <BrandSlider />
        </div>
      </div>

      <div className="digital">
        <h1>Digital transformation simplified.</h1>
      </div>

      <div className="main-service">
        {DigitalContent.map((item, index) => (
          <div className="services" key={index}>
            <div className="dummy">
              <div className="digital-content">
                <span>{item.span}</span>
                <p>{item.p}</p>
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="additional-content">
        <div className="global-scale-content">
          <p>Global Scale</p>
          <h1>Making tech accessible for the world.</h1>
          <h3>
            We guide global businesses through the challenges of developing
            purposeful technology that addresses their needs and advances
            their growth. We have established offices in India, the UAE, and
            the USA.
          </h3>
          <div className="served">
            <div>
              <span>{global.project}+</span>
              <p>Projects Delivered</p>
            </div>
            <div>
              <span>{global.client}+</span>
              <p>Client Served</p>
            </div>
            <div>
              <span>{global.country}+</span>
              <p>Countries Served</p>
            </div>
          </div>
          <div className="Backed">
            <div>Backed By</div>
            <div className="backed-images">
              <img src="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/66af714c44e5f8acd220c6e6_661f79a9b7b904f276ace43e_image5011-ezgif.com-resize.avif" alt="" />
              <img src="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/66af738938dcfa7bd878c2a1_661f7dbb43b149567f956eee_image503-ezgif.com-resize.avif" alt="" />
              <img src="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/66af73b4b535bb186baf0ba3_661f7dd60220d4817cb232d6_Tanglin1-ezgif.com-resize.avif" alt="" />
            </div>
          </div>
        </div>
        <div className="global-img">
          <img src="/global.gif" alt="Global reach" />
        </div>
      </div>

      <div className="case">
        <div className="case-studies">
          <h3>Case Studies</h3>
        </div>
        <div className="explore-impact">
          <h2>Explore the impact we've delivered</h2>
        </div>
        <div>
          <button className="view-all">View All →</button>
        </div>
        <div className="carousel-container-c">
          <Carousel cards={cardsData} cardsperslide={4} />
        </div>
      </div>

      <div className="accomplish">
        <div className="accomplish-content">
          <h2>
            We are big enough to deliver and small enough to care
          </h2>
          <p>Teams large and small rely on EMB</p>
          <button className="contact-sales" onClick={toggleFormVisibility}>
            Contact Sales →
          </button>
          {isFormVisible && (
            <Form
              isFormVisible={isFormVisible}
              onClose={() => setIsFormVisible(false)}
            />
          )}
          <div className="stats">
            <div>
              <span>9.4/10</span>
              <p>Customer Satisfaction</p>
            </div>
            <div>
              <span>120 +</span>
              <p>Tech Stacks</p>
            </div>
            <div>
              <span>30 %</span>
              <p>Reduction in Delivery Time</p>
            </div>
            <div>
              <span>70 %</span>
              <p>Repeat Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="driving">
        <div className="driving-impact">
          <div className="driving-impact-header">
            <h2>Driving results for leaders across the globe</h2>
          </div>
          <DrivingResult DrivingResultData={DrivingResultData} />
        </div>
      </div>

      <Blog />
    </>
  );
};

export default Home;
