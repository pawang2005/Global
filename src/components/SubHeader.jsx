import { useState, useEffect } from "react";
import ContactSaleButton from "./ContactSaleButton.jsx";
// import "./IOT.component.css";
import DrivingResult from "./DrivingResult.jsx";
import CaseStudies from "./CaseStudies.jsx";
import Blog from "./Blog.jsx";
import { useRef } from "react";
const SubHeader = ({ Data }) => {
  const approachRef = useRef(null);
  const solutionsRef = useRef(null);
  const whyUsRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const approach = [
    {
      title: "Collaborating with the best partner",
      content:
        "From our vast network of over 1500 specialized partners across 20 industries. We ensure that the partner we select aligns with your business goals, fostering a collaboration that drives you towards success.",
    },
    {
      title: "Collaborating with the best partner",
      content:
        "From our vast network of over 1500 specialized partners across 20 industries. We ensure that the partner we select aligns with your business goals, fostering a collaboration that drives you towards success.",
    },
    {
      title: "Collaborating with the best partner",
      content:
        "From our vast network of over 1500 specialized partners across 20 industries. We ensure that the partner we select aligns with your business goals, fostering a collaboration that drives you towards success.",
    },
  ];

  const solutions = [
    {
      title: "Deep Learning Model",
      content:
        "Utilize the latest in deep learning technology to analyze and interpret complex data patterns.",
      image: "/project-dashboard.png",
    },
    {
      title: "Deep Learning Model",
      content:
        "Utilize the latest in deep learning technology to analyze and interpret complex data patterns.",
      image: "/join.png",
    },
    {
      title: "Deep Learning Model",
      content:
        "Utilize the latest in deep learning technology to analyze and interpret complex data patterns.",
      image: "/project-dashboard.png",
    },
    {
      title: "Deep Learning Model",
      content:
        "Utilize the latest in deep learning technology to analyze and interpret complex data patterns.",
      image: "/join.png",
    },
    {
      title: "Deep Learning Model",
      content:
        "Utilize the latest in deep learning technology to analyze and interpret complex data patterns.",
      image: "/project-dashboard.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  let count = 1;
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [activeIndexList, setActiveIndexList] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexList((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 4000); // Change the interval duration as desired (in milliseconds)

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [solutions.length]);

  const handleListItemClick = (index) => {
    setActiveIndexList(index);
    clearInterval(intervalId);
    setIntervalId(
      setInterval(() => {
        setActiveIndexList((prevIndex) => (prevIndex + 1) % solutions.length);
      }, 4000)
    );
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="content-container">
            <div>
              <h1>{Data.container.title}</h1>
            </div>
            <div>
              <h3>{Data.container.content}</h3>
            </div>
            <div>
              <ContactSaleButton></ContactSaleButton>
            </div>
          </div>
          <div className="image-container">
            <img src={Data.container.image} alt="" />
          </div>
        </div>

        <div className="Trusted-By">
          <h2 style={{ margin: "0px" }}>Trusted by</h2>
          {Data.container.trustedBy.map((image, index) => {
            return <img src={image.image} alt="" />;
          })}
        </div>
      </div>

      <div className="what-we-do">
        <div className="what-we-do-content">
          <h2>What we do</h2>
          <p>{Data.what_we_do.what_we_do_content}</p>
        </div>
        <div className="what-we-do-img">
          <img src={Data.what_we_do.what_we_do_image} alt="" />
        </div>
      </div>

      <div className="main-sub-content">
        <div onClick={() => handleScroll(approachRef)}>Our Approach</div>
        <div onClick={() => handleScroll(solutionsRef)}>Our Solutions</div>
        <div onClick={() => handleScroll(whyUsRef)}>Why Us</div>
      </div>

      <section id="our-approach" ref={approachRef}>
        <div className="our-approach">
          <div className="our-approach-header">
            <h2>Our approach towards your {Data.main} journey</h2>
          </div>
          <div className="our-approach-main-content">
            <div className="our-approach-content">
              {Data.our_approach.map((data, index) => {
                return (
                  <div key={index} className="approach-list">
                    <div
                      className="approach-list-head"
                      onClick={() => {
                        handleClick(index);
                      }}
                    >
                      <span className="approach-title">
                        {count++}. {data.approach}
                      </span>{" "}
                      <svg
                        viewBox="0 0 28 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L14 14L27 1"
                          stroke="currentColor"
                          strokeWidth="2"
                        ></path>
                      </svg>
                    </div>
                    {activeIndex === index && (
                      <div className="main-approach-content">
                        {data.approach_content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="our-approach-img">
              <img src={Data.our_approach_image} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={solutionsRef}
        id="our-solutions"
        className="container mx-auto my-12"
        style={{ padding: "0" }}
      >
        <div
          className="our-solutions-container"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "fit-content",
            background: "#f8f8f8",
            width: "100%",
            margin: "0",
            padding: "0 20px !important",
          }}
        >
          <div className="our-solution-header " style={{ padding: "40px" }}>
            <h2 className="text-3xl font-bold mb-4">
              Innovative {Data.main} Technologies for Every Need
            </h2>
          </div>
          <div className="our-solution-main-content">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 our-solution"
              style={{ width: "50%" }}
            >
              <div className="our-solution-list">
                {Data.our_solutions.map((data, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                    onClick={() => handleListItemClick(index)}
                    style={{
                      background: `${
                        activeIndexList === index ? "white" : ""
                      } `,
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                      padding: "20px",
                    }}
                  >
                    <h3 className="text-lg font-bold">
                      <img
                        src="/bullet-point.png"
                        alt=""
                        style={{
                          height: "15px",
                          width: "20px",
                          marginRight: "20px",
                        }}
                      />
                      {data.title}
                    </h3>
                    {activeIndexList === index && (
                      <p className="mt-2 text-gray-600">{data.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 our-solution-image" style={{ width: "50%" }}>
              {activeIndexList !== null && (
                <img
                  src={Data.our_solutions[activeIndexList].image}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="your-all-in-one">
        <div className="your-all-in-one">
          <div className="you-all-in-one-header">
            <h2>Your All-in-One Suite</h2>
          </div>

          <div className={"your-all-in-one-content "}>
            <div className="left-context">
              <div
                className="context-content"
                style={{ background: "#c2efc366" }}
              >
                <div>
                  <img
                    src={Data.services.box1.image}
                    alt=""
                    style={{ height: "100px", width: "auto" }}
                  />
                </div>
                <div>
                  <h3 className="content-title">
                    {Data.services.box1.title}
                  </h3>
                </div>
                <div>{Data.services.box1.content}</div>
              </div>
              <div
                className="context-content"
                style={{ background: "#fef1cf" }}
              >
                <div>
                  <img src={Data.services.box2.image} alt="" />
                </div>
                <div>
                  <h3 className="content-title">
                    {Data.services.box2.title}
                  </h3>
                </div>
                <div>{Data.services.box2.content}</div>
              </div>
            </div>
            <div className="center-context">
              <div
                className="context-content"
                style={{ background: "#f1e8fd" }}
              >
                <div>
                  <img src={Data.services.box3.image} alt="" />
                </div>
                <div>
                  <h3 className="content-title">
                    {Data.services.box3.title}
                  </h3>
                </div>
                <div>{Data.services.box3.content}</div>
              </div>
            </div>
            <div className="right-context">
              <div
                className="context-content"
                style={{ background: "#fef1cf" }}
              >
                <div>
                  <img src={Data.services.box4.image} alt="" />
                </div>
                <div>
                  <h3 className="content-title">
                    {Data.services.box4.title}
                  </h3>
                </div>
                <div>{Data.services.box4.content}</div>
              </div>
              <div
                className="context-content"
                style={{ background: "#c2efc366" }}
              >
                <div>
                  <img src={Data.services.box5.image} alt="" />
                </div>
                <div>
                  <h3 className="content-title">
                    {Data.services.box5.title}
                  </h3>
                </div>
                <div>{Data.services.box5.content}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="Technology-we-use">
          <div className="Technology-header">
            <h2>Technology we use</h2>
          </div>
          <div className="Technology-logos">
            <div className="Technology-1">
              {Data.technology_we_use.tech1.map((data, index) => {
                return (
                  <div className="Technology-img" key={index}>
                    <img src={data.image} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="Technology-2">
              {Data.technology_we_use.tech2.map((data, index) => {
                return (
                  <div className="Technology-img" key={index}>
                    <img src={data.image} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" ref={whyUsRef}>
        <div className="why-choose-us">
          <div>
            <h2>Why Choose Us?</h2>
          </div>
          <div>
            {Data.why_choose_us.map((data, index) => {
              let c = index + 1;
              return (
                <div className="why-choose-us-context" key={index}>
                  {c % 2 === 0 ? (
                    <>
                      <div className="why-choose-us-img">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="why-choose-us-text">
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="why-choose-us-text">
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                      </div>
                      <div className="why-choose-us-img">
                        <img src={data.image} alt="" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CaseStudies></CaseStudies>
      <DrivingResult></DrivingResult>
      <Blog></Blog>
    </>
  );
};

export default SubHeader;
