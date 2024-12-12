import ContactSaleButton from "./ContactSaleButton";
import DeveloperProfile from './DeveloperProfile';
import "./Staff.component.css";
import BrandSlider from "./BrandSlider";
const Staff = () => {
  return (
    <>
      <div className="main-container-cont">
        <div className="left-content">
          <img src="/avatar.png" alt="" className="ava1" />
          <img src="/avatar.png" alt="" className="ava2" />
          <img src="/avatar.png" alt="" className="ava3" />
        </div>
        <div className="container-cont">
          <h2>We Find Highly Skilled Developer For You</h2>
          <p>
            Cut Endless Round. Choose from a pool of seasoned developers
            evaluated for their technical skills, seniority, and communication.
          </p>
          <ContactSaleButton />
          <h3>Trusted By</h3>
          <BrandSlider></BrandSlider>
        </div>
        <div className="right-content">
          <div>
            <img src="/avatar.png" alt="" className="ava4" />
            <p style={{width:"10px"}}> Pawan Kumar</p>
          </div>
          <div>
            <img src="/avatar.png" alt="" className="ava5" />
          </div>
          <div>
            <img src="/avatar.png" alt="" className="ava6" />
          </div>{" "}
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
            <div>
              <div>
                <span>Step 1: Share your requirements</span>
              </div>
              <div>
                <img src="/step1.png" alt="" />
              </div>
              <div>
                <p>
                  Our consultants will get on a call with you to understand your
                  project specifics, candidate expectations, and desired
                  business outcomes.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span>Step 1: Share your requirements</span>
              </div>
              <div>
                <img src="/step1.png" alt="" />
              </div>
              <div>
                <p>
                  Our consultants will get on a call with you to understand your
                  project specifics, candidate expectations, and desired
                  business outcomes.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span>Step 1: Share your requirements</span>
              </div>
              <div>
                <img src="/step1.png" alt="" />
              </div>
              <div>
                <p>
                  Our consultants will get on a call with you to understand your
                  project specifics, candidate expectations, and desired
                  business outcomes.
                </p>
              </div>
            </div>
            <div>
              <div>
                <span>Step 1: Share your requirements</span>
              </div>
              <div>
                <img src="/step1.png" alt="" />
              </div>
              <div>
                <p>
                  Our consultants will get on a call with you to understand your
                  project specifics, candidate expectations, and desired
                  business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div><h2>Know everything about your developers with complete technical mapping</h2></div>
        <div>

        <DeveloperProfile />
          
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Staff;
