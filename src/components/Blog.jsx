import Carousel from "./Carousel";
import ContactSaleButton from "./ContactSaleButton";
import './Blog.component.css'
const Blog = () => {
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
      <div className="blog-container" style={{backgroundColor:"black"}}>
        <div className="blog">
          <h3 style={{color:"#fff", fontSize:"40px"}}>Blogs</h3>
          <h2 style={{color:"#fff"}}>Learning how Technology can help you grow</h2>
          <p>
            We bring you the latest insights in the tech industry. Stay at the
            forefront of technology trends and discover how to thrive in the
            digital era.
          </p>
        </div>
        <div className="blog-carousel">
          <Carousel cards={cardsData} cardsperslide={3} />
        </div>
      </div>

      <div className="accomplish">
        <div className="accomplish-content">
          <h2>See all that you can accomplish with EMB Global</h2>
          <div>
          <ContactSaleButton></ContactSaleButton>
        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
