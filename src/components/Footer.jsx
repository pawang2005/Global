import React, { useState } from "react";
import "./Footer.component.css";

const Footer = () => {
  const [isSubLocationVisible, setIsSubLocationVisible] = useState(false);
  const [isSubLocationVisible2, setIsSubLocationVisible2] = useState(false);
  const [isSubLocationVisible3, setIsSubLocationVisible3] = useState(false);
  const toggleSubLocation = () => {
    setIsSubLocationVisible(!isSubLocationVisible);
  };
  const toggleSubLocation2 = () => {
    setIsSubLocationVisible2(!isSubLocationVisible2);
  };
  const toggleSubLocation3 = () => {
    setIsSubLocationVisible3(!isSubLocationVisible3);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="/emb.png"
            alt=""
            style={{ height: "50px", width: "110px", marginBottom: "30px" }}
          />
          <div className="location">
            <p>
              <strong>India</strong>
            </p>
            <p style={{ fontSize: "20px", margin: "10px auto" }}>
              Gurugram: Plot No. 17, Phase-4, Maruti Udyog, Sector 18, Gurugram,
              HR
            </p>
            <p style={{ margin: "10px auto", marginBottom: "40px" }}>
              Email: <a href="mailto:contact@emb.global">contact@emb.global</a>
            </p>
          </div>
          <div
            className="other-locations"
            style={{
              fontSize: "23px",
              fontWeight: "bold",
              margin: "20px auto",
            }}
          >
            <p
              className="main-location"
              onClick={toggleSubLocation}
              style={{ cursor: "pointer" }}
            >
              <strong>Kingdom of Emirates</strong>{" "}
              {isSubLocationVisible ? " -" : " +"}
            </p>
            {isSubLocationVisible && (
              <div className="other-sub-location">
                <h4>
                  Abu Dhabi: Etihad Airways Centre, Al Rahah, Al Muneera, Abu
                  Dhabi, UAE
                </h4>
                <h4>Dubai: Building 4, Bay Square, Business Bay, Dubai, UAE</h4>
                <div className="footer-number">
                  <span>+971- 503566002</span>
                  <span>+971- 563553404</span>
                  <a href="mailto:contact@emb.global">contact@emb.global</a>
                </div>
              </div>
            )}

            <p
              className="main-location"
              onClick={toggleSubLocation2}
              style={{ cursor: "pointer" }}
            >
              <strong>Kingdom of Saudi Arabia</strong>{" "}
              {isSubLocationVisible2 ? " -" : " +"}
            </p>
            {isSubLocationVisible2 && (
              <div className="other-sub-location">
                <h4>
                  Abu Dhabi: Etihad Airways Centre, Al Rahah, Al Muneera, Abu
                  Dhabi, UAE
                </h4>
                <h4>Dubai: Building 4, Bay Square, Business Bay, Dubai, UAE</h4>
                <div className="footer-number">
                  <span>+971- 503566002</span>
                  <span>+971- 563553404</span>
                  <a href="mailto:contact@emb.global">contact@emb.global</a>
                </div>
              </div>
            )}

            <p
              className="main-location"
              onClick={toggleSubLocation3}
              style={{ cursor: "pointer" }}
            >
              <strong>United States of America</strong>
              {isSubLocationVisible3 ? " -" : " +"}
            </p>
            {isSubLocationVisible3 && (
              <div className="other-sub-location">
                <h4>
                  Abu Dhabi: Etihad Airways Centre, Al Rahah, Al Muneera, Abu
                  Dhabi, UAE
                </h4>
                <h4>Dubai: Building 4, Bay Square, Business Bay, Dubai, UAE</h4>
                <div className="footer-number">
                  <span>+971- 503566002</span>
                  <span>+971- 563553404</span>
                  <a href="mailto:contact@emb.global">contact@emb.global</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="footer-right">
          <div className="links">
            <a href="/contact">Contact Us</a>
            <a href="/about">About Us</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/insights">Insights</a>
            <a href="/careers">Careers</a>
            <a href="/partner">For Partners</a>
            <a href="/grievance-redressal-policy">Grievance Redressal Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <p style={{ fontSize: "20px" }}>
            Copyright © 2024 Mantarav Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
