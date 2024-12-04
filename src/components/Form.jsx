import React, { useState } from "react";
import "./Form.component.css";

function Form({ isFormVisible }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    companySize: "",
    jobTitle: "",
    servicesRequired: [],
    otherServices: "",
    heardAboutUs: "",
  });

  const services = [
    "Web Development",
    "Digital Marketing",
    "App Development",
    "AI/ML",
    "Hire Developers",
    "E-commerce Development",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (service) => {
    setFormData((prevState) => {
      const services = prevState.servicesRequired.includes(service)
        ? prevState.servicesRequired.filter((s) => s !== service)
        : [...prevState.servicesRequired, service];
      return { ...prevState, servicesRequired: services };
    });
  };

  return (
    <div
      className="form-container"
      style={{ visibility: isFormVisible ? "visible" : "hidden" }}
    >
      <h3>Let’s get started!</h3>
      <p>Please fill the details below</p>
      <div className="form-group">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Business Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Size*</label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
              >
                <option value="">Select one...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Job Title*</label>
              <select
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              >
                <option value="">Select one...</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="CEO">CEO</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Services Required*</label>
            <div>
              {services && services.length > 0 ? (
                services.map((service, index) => (
                  <div key={index} className="checkbox-item">
                    <span
                      style={{padding:"10px;",border:"1px solid black",margin:"10px;"}}
                    >
                      {service}
                    </span>
                  </div>
                ))
              ) : (
                <p>No services available.</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label>Other:</label>
            <input
              type="text"
              name="otherServices"
              value={formData.otherServices}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>How did you hear about us?*</label>
            <input
              type="text"
              name="heardAboutUs"
              value={formData.heardAboutUs}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            By proceeding you agree to Expand My Business's{" "}
            <a href="/privacy-policy">privacy policy</a> and{" "}
            <a href="/terms">terms and conditions</a>.
          </p>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
