import React, { useState } from "react";
import "./Form.component.css";

function Form({ isFormVisible, onClose }) {
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

  const [submitStatus, setSubmitStatus] = useState({
    isLoading: false,
    success: false,
    error: null,
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

  const handleServiceClick = (service) => {
    setFormData((prevState) => {
      const isSelected = prevState.servicesRequired.includes(service);

      const updatedServices = isSelected
        ? prevState.servicesRequired.filter((s) => s !== service)
        : [...prevState.servicesRequired, service];

      return { ...prevState, servicesRequired: updatedServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isLoading: true, success: false, error: null });

    try {
      const googleSheetsScriptUrl = 'https://script.google.com/macros/s/AKfycbx3ZPTdWCI5XP4Gynyek1HJvhKYjAQ4o-CQbUQqe3XotlHSH7z928sPf_sex3j7ZG1dfQ/exec';

      const response = await fetch(googleSheetsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus({ 
        isLoading: false, 
        success: true, 
        error: null 
      });
      setFormData({
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

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        isLoading: false, 
        success: false, 
        error: error.message || 'Submission failed' 
      });
    }
  };

  if (!isFormVisible) return null;

  return (
    <>  
      {
        <div
          className="form_bg_container"
          style={{ display: isFormVisible ? "flex" : "none" }}
          onClick={onClose} 
        >
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              
            >
              <h2 style={{margin:"0"}}>Let’s get started!</h2>{" "}
              <button style={{ background: "#fff", display:"flex" }} onClick={onClose}>
                x
              </button>
            </div>
            <p>Please fill the details below</p>
            <div className="form-group">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      First Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Last Name <span style={{ color: "red" }}>*</span>
                    </label>
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
                    <label>
                      Phone Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Business Email <span style={{ color: "red" }}>*</span>
                    </label>
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
                  <div className="form-group-company">
                    <label>
                      Company Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group-company-size">
                    <label>
                      Company Size <span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      required
                      style={{ width: "100%" }}
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
                  <div className="form-group-title">
                    <label>
                      Job Title <span style={{ color: "red" }}>*</span>
                    </label>
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
                <div className="form-group-title">
                  <label>
                    Services Required{" "}
                    <span
                      style={{ color: "red", justifyContent: "flex-start" }}
                    >
                      *
                    </span>
                  </label>
                  <div className="checkbox-container">
                    {services && services.length > 0 ? (
                      services.map((service, index) => (
                        <div
                          key={index}
                          onClick={() => handleServiceClick(service)}
                          
                        >
                          <span
                            style={{
                              padding:"10px",
                              border: formData.servicesRequired.includes(service)
                                ? "2px solid #007BFF"
                                : "1px solid #e1e1e1",
                              backgroundColor: formData.servicesRequired.includes(
                                service
                              )
                                ? "#cce5ff"
                                : "#fafafa",
                              color: formData.servicesRequired.includes(service)
                                ? "#004085"
                                : "black",
                              cursor: "pointer",
                            }}
                          >
                            {service}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p>No services available.</p>
                    )}
                  </div>
                  <div className="form-group-other">
                    <input
                      type="text"
                      name="otherServices"
                      placeholder="Other"
                      value={formData.otherServices}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="form-group-title">
                  <label>
                    How did you hear about us?{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                  By proceeding you agree to Expand My Business's <a href="/privacy-policy">privacy policy</a> and <a href="/terms-and-conditions">terms and conditions</a>.
                </p>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={submitStatus.isLoading}
                >
                  {submitStatus.isLoading ? "Submitting..." : "Submit"}
                </button>

                {submitStatus.success && (
                  <div className="success-message">
                    Form submitted successfully!
                  </div>
                )}

                {submitStatus.error && (
                  <div className="error-message">{submitStatus.error}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Form;