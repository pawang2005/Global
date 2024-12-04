import React, { useState } from "react";
import "./Header.component.css";
import Form from "./Form";
const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <>
      <link
        href="https://cdn.prod.website-files.com/6594b3bb27ede6e1104d3b10/css/expand-my-business-new.webflow.86e9194f2.min.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <header className="header">
        <div className="log">
          <img src="/emb.png" alt="EMB Global" />
        </div>
        <nav className="nav">
          <div className="nav-item dropdown">
            <div className="content">
              <span className="Items">Explore Services</span>
              <div
                className="icon w-icon-dropdown-toggle drop"
                aria-hidden="true"
              ></div>
            </div>
            <div className="dropdown-menu">
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/emerging.png" alt="" />
                  <span>Emerging Technology</span>
                </div>
              </a>
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/cloud.png" alt="" />
                  <span>Data and Cloud</span>
                  {/* <div className="dropdown-item-subitem">
                    <a href="#">Cost Optimisation</a>
                  </div> */}
                </div>
              </a>
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/software.png" alt="" />
                  <span>Software Development</span>
                </div>
              </a>
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/marketing.png" alt="" />
                  <span>Marketing</span>
                </div>
              </a>
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/staff.png" alt="" />
                  <span>Staff Augmentation</span>
                </div>
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <div className="content">
              <span className="Items">Resources</span>
              <div
                className="icon w-icon-dropdown-toggle drop"
                aria-hidden="true"
              ></div>
            </div>
            <div className="dropdown-menu">
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/blog.png" alt="" />
                  <span>Blog</span>
                </div>
              </a>
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/case.png" alt="" />
                  <span>Case Studies</span>
                </div>
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <div className="content">
              <span className="Items">Community</span>
              <div
                className="icon w-icon-dropdown-toggle drop"
                aria-hidden="true"
              ></div>
            </div>
            <div className="dropdown-menu">
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/blog.png" alt="" />
                  <span>Work with us</span>
                </div>
              </a>
              <a href="#emerging-tech">
                <div className="dropdown-item">
                  <img src="/partner.png" alt="" />
                  <span>Apply as a Partner Agency</span>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <button className="contact-sales" onClick={toggleFormVisibility}>Contact Sales →</button>
        {
          isFormVisible && <Form></Form>
        }
      </header>
    </>
  );
};

export default Header;
