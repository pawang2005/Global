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
            style={{ height: "50px", width: "110px", marginBottom: "30px" , mixBlendMode:"multiply"}}
          />
          <div className="location">
            <p>
              <strong>India</strong>
            </p>
            <p style={{ margin: "10px auto", marginBottom: "40px" }}>
              Email: <a href="mailto:contact@emb.global">contact@emb.global</a>
            </p>
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
