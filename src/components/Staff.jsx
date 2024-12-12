import ContactSaleButton from "./ContactSaleButton";
import DeveloperProfile from "./DeveloperProfile";
import "./Staff.component.css";
import BrandSlider from "./BrandSlider";
import DrivingResult from "./DrivingResult.jsx";
import CaseStudies from "./CaseStudies.jsx";
const Staff = () => {
  let count = 1;
  const Steps = [
    {
      step_title: `Step ${count++}: Share your requirements`,
      step_image: "/step1.png",
      step_context:
        "Our consultants wil get on a call with you to understand your project specifics, andidate expectations, and desired business outcomes.",
    },
    {
      step_title: `Step ${count++}: Share your requirements`,
      step_image: "/step1.png",
      step_context:
        "Our consultants wil get on a call with you to understand your project specifics, andidate expectations, and desired business outcomes.",
    },
    {
      step_title: `Step ${count++}: Share your requirements`,
      step_image: "/step1.png",
      step_context:
        "Our consultants wil get on a call with you to understand your project specifics, andidate expectations, and desired business outcomes.",
    },
    {
      step_title: `Step ${count++}: Share your requirements`,
      step_image: "/step1.png",
      step_context:
        "Our consultants wil get on a call with you to understand your project specifics, andidate expectations, and desired business outcomes.",
    },
  ];
  const leftAVA = [
    {
      image: "/avatar.png",
      className: "ava1",
    },
    {
      image: "/avatar.png",
      className: "ava2",
    },
    {
      image: "/avatar.png",
      className: "ava3",
    },
  ];

  const rightAVA = [
    {
      image: "/avatar.png",
      className: "ava4",
    },
    {
      image: "/avatar.png",
      className: "ava5",
    },
    {
      image: "/avatar.png",
      className: "ava6",
    },
  ];
  return (
    <>
      <div className="main-container-cont">
        <div className="left-content">
          {leftAVA.map((data, index) => {
            return (<img
              src={data.image}
              alt=""
              className={data.className}
              key={index}
            />);
          })}
        </div>
        <div className="container-cont">
          <h2>We Find Highly Skilled Developer For You</h2>
          <p>
            Cut Endless Round. Choose from a pool of seasoned developers
            evaluated for their technical skills, seniority, and communication.
          </p>
          <div>
            <ContactSaleButton />
          </div>
          <h3>Trusted By</h3>
          <BrandSlider></BrandSlider>
        </div>
        <div className="right-content">
          {rightAVA.map((data, index) => {
            return (<img
              src={data.image}
              alt=""
              className={data.className}
              key={index}
            />);
          })}
        </div>
      </div>
      <div className="development">
        <div>
          <h2>
            Find top development talent without the stress of hiring challenges
          </h2>
        </div>
        <div className="development-content">
          <div className="left-cont">
            <div>
              {" "}
              <h2>A Pool of 12,000+ Vetted Certified Developers</h2>
            </div>
            <div>
              <p>
                With 9000+ hours invested in evaluation, we provide a
                comprehensive technical summary for a clear view of the
                candidate's expertise.
              </p>
            </div>
            <div>
              <ContactSaleButton />
            </div>
          </div>
          <div className="right-cont">
            {Steps.map((data, index) => {
              return (
                <div key={index}>
                  <div>
                    <span>{data.step_title}</span>
                  </div>
                  <div>
                    <img src={data.step_image} alt="" />
                  </div>
                  <div>
                    <p>{data.step_context}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2>
            Know everything about your developers with complete technical
            mapping
          </h2>
        </div>
        <div>
          <DeveloperProfile />
        </div>
      </div>
      <CaseStudies></CaseStudies>
      <DrivingResult></DrivingResult>
    </>
  );
};

export default Staff;
