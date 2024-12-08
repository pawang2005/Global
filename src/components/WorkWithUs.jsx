import "./WorkWithUs.component.css";
import { useState } from "react";
const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessEmail: "",
    businessName: "",
    contactNumber: "",
    jobTitle: "",
    reasonForContact: "",
    howDidYouHear: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const work = [
    {
      image: "/workingwithus.png",
      head: "Bold experimentation",
      content:
        "At EMB Global we're not simply transforming the B2B landscape were completely redefining it. As a hypergrowth startup, we embrace experimentation without hesitation. When you become a member of our team you dont just hold a job you become a part of our groundbreaking initiatives and gain invaluable skills.",
    },
    {
      image: "/workingwithus.png",
      head: "Bold experimentation",
      content:
        "At EMB Global we're not simply transforming the B2B landscape were completely redefining it. As a hypergrowth startup, we embrace experimentation without hesitation. When you become a member of our team you dont just hold a job you become a part of our groundbreaking initiatives and gain invaluable skills.",
    },
    {
      image: "/workingwithus.png",
      head: "Bold experimentation",
      content:
        "At EMB Global we're not simply transforming the B2B landscape were completely redefining it. As a hypergrowth startup, we embrace experimentation without hesitation. When you become a member of our team you dont just hold a job you become a part of our groundbreaking initiatives and gain invaluable skills.",
    },
  ];
  return (
    <>
      <div className="main-container">
        <div className="main-header">
          <h2>Let’s redefine IT outsourcing, together</h2>
        </div>
        <div className="after-header-content">       
          <p>
            At EMB Global, we are a platform bridging the gap between agencies
            and clients and changing the face of interactions in the IT and
            digital services industries.
          </p>
        </div>

        <div className="main-content">
          {work.map((data, index) => {
            return (<div className="content-containers" key={index}>
              <div className="image-containers">
                <img src={data.image} alt="" />
              </div>
              <div className="context">
                <h3>{data.head}</h3>
                <br />
                <p>{data.content}</p>
              </div>
            </div>);
          })}
        </div>

        <div className="join-us">
          <div className="join-us-text">
            <h2>Join us in shaping the future of millions of businesses. </h2>
          </div>

          <div className="form-container-content">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <div>
                  <label>
                    Name<span className="required">*</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Business Email<span className="required">*</span>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Business Name<span className="required">*</span>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div style={{ flexGrow: "1" }}>
                  <label>
                    Contact Number<span className="required">*</span>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div style={{ flexGrow: "1" }}>
                  <label>
                    Job Title<span className="required">*</span>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div style={{ flexGrow: "1" }}>
                  <label>
                    Reason for Contact Request
                    <span className="required">*</span>
                    <textarea
                      name="reasonForContact"
                      value={formData.reasonForContact}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div style={{ flexGrow: "1" }}>
                  <label>
                    How did you hear about us
                    <textarea
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkWithUs;
