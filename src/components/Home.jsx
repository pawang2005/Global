import "./Home.component.css";
import Header from "./Header";
import Carousel from "./Carousel";
const Home = () => {

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
    country:23,
  }

  const cardsData = [
    {
      title: 'Software Development1',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },
    {
      title: 'Software Development2',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },
    {
      title: 'Software Development3',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },
    {
      title: 'Software Development4',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },
    {
      title: 'Software Development5',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },
    {
      title: 'Software Development6',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },
    {
      title: 'Software Development7',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },   
    {
      title: 'Software Development8',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },   
    {
      title: 'Software Development9',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },   
    {
      title: 'Software Development10',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },   
    {
      title: 'Software Development11',
      content: 'A mental health startup leveraged a mobile app for  patient interaction',
      image: '/discover.png',
    },    
  ];
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="content-container">
          <div>
            <h2>Empowering businesses on their digital journey</h2>
          </div>
          <div>
            <h3>
              We help businesses unlock exponential growth by finding the right
              tech solutions.
            </h3>
          </div>
          <div>
            <button className="contact-sales">Contact Sales →</button>
          </div>
        </div>
        <div className="image-container">
          <img src="/empowering.png" alt="" />
        </div>
      </div>
      <div className="trust">
        <div className="trust-content">
          <h2>Trusted by the best in the business</h2>
        </div>
      </div>

      <div className="digital">
        <div className="digital-context">
          <h1>Digital transformation simplified.</h1>
        </div>
      </div>
      <div className="main-service">
        {DigitalContent.map((item, index) => {
          return (
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
          );
        })}
      </div>
      <div className="additional-content">
        <div className="global-scale-content">
          <div>
            <p>Global Scale</p>
          </div>
          <br />
          <div>
            <h1>Making tech accessible for the world.</h1>
          </div>
          <br />
          <div>
            <h3>
              We guide global businesses through the challenges of developing
              purposeful technology that addresses their needs and advances
              their growth. We have established offices in India, the UAE, and
              the USA.
            </h3>
          </div>
          <br />
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
          <br />
          <div className="Backed">
            <div style={{ marginTop: "10px" }}>Backed By</div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/66af714c44e5f8acd220c6e6_661f79a9b7b904f276ace43e_image5011-ezgif.com-resize.avif"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/66af738938dcfa7bd878c2a1_661f7dbb43b149567f956eee_image503-ezgif.com-resize.avif"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/66af73b4b535bb186baf0ba3_661f7dd60220d4817cb232d6_Tanglin1-ezgif.com-resize.avif"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="global-img">
          <img src="/global.gif" alt="" />
        </div>
      </div>

      <div className="case">
        <div className="case-studies">
          <h3 style={{color:"lightgray"}}>Case Studies</h3>
        </div>
        <div className="explore-impact">
          <h2 style={{color:"#fff"}}>Explore the impact we've delivered</h2>
        </div>
        <div>
          <button className="contact-sales">View All →</button>
        </div>  
        <div className="carousel-container">
          {
            console.log(cardsData)
          }
          <Carousel cards={cardsData} />
        </div>
      </div>
      
      <div>
      </div>
    </>
  );
};

export default Home;
