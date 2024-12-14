import { useState } from 'react';
import './Container.component.css'
const Container = ({number}) => {

  

  return(
    <div className="container-algo">
      <div className="left-panel-algo">
        <h1 className="company-name-algo">{number}ALGOSOFT</h1>
        <h2>Algosoft Apps Technologies Private Limited</h2>
        <p>Noida, India</p>
        <h3>Specialised in:</h3>
        <ul>
          <li>Mobile Application Development</li>
          <li>Web Development & Design</li>
          <li>Internet Marketing</li>
          <li>Social Media Marketing</li>
          <li>iPhone Apps Development</li>
          <li>Android Apps Development</li>
        </ul>
      </div>
      <div className="right-panel-algo">
        <p>
          They specialize in crafting engaging mobile and web solutions for
          entrepreneurs, startups, and businesses. Their award-winning team
          delivers custom web applications with high performance, security, and
          intuitive design for optimal user experiences.
        </p>
        <div className="info-algo">
          <div>
            <h3>Established in:</h3>
            <p>2010</p>
          </div>
          <div>
            <h3>Team Size:</h3>
            <p>27</p>
          </div>
          <div>
            <h3>Business Impact:</h3>
            <p>40% growth in annual revenue</p>
          </div>
        </div>
        <div className="journey-algo">
          <h3>Journey</h3>
          <ul>
            <li>
              <span>Jan, 2022</span> - Onboarded on our platform
            </li>
            <li>
              <span>Mar, 2022</span> - First project closed
            </li>
            <li>
              <span>Apr, 2022</span> - First project delivered
            </li>
            <li>
              <span>Feb, 2024</span> - 10 projects delivered so far
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Container;