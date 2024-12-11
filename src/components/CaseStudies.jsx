import './CaseStudies.component.css'
import Carousel from './Carousel';
const CaseStudies = () => {
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
  return (
    <>
       <div className="case">
        <div className="case-studies">
          <h3 style={{ color: "lightgray" }}>Case Studies</h3>
        </div>
        <div className="explore-impact">
          <h2 style={{ color: "#fff" }}>Explore the impact we've delivered</h2>
        </div>
        <div>
          <button className="contact-sales" style={{ marginBottom: "20px" }}>
            View All →
          </button>
        </div>
        <div className="carousel-container-c">
          <Carousel cards={cardsData} cardsperslide={4} />
        </div>
      </div>
    </>
  )
}

export default CaseStudies;