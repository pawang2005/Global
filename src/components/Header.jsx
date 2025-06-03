import React, { useState, useEffect } from "react";
import "./Header.component.css";
import Form from "./Form";

const dropdownData = [
  {
    title: "Explore more Services",
    items: [
      {
        icon: "/emerging.png",
        label: "Emerging Technology",
        subItems: [
          { label: "Internet of Things", link: "/iot" },
          { label: "Artificial Intelligence", link: "/ai" },
          { label: "Digital Kiosk", link: "/digital-kiosk" },
          { label: "AK/VR", link: "/akvr" },
        ],
      },
      {
        icon: "/cloud.png",
        label: "Data and Cloud",
        link: "/data-and-cloud",
        subItems: [
        ],
      },
      {
        icon: "/software.png",
        label: "Software Development",
        link: "#software-dev",
        subItems: [
          { label: "Apps & Websites", link: "/apps-and-websites" },
          { label: "E-Commerce", link: "/e-commerce" },
          { label: "ERP", link: "/erp" },
        ],
      },
      { icon: "/marketing.png", label: "Marketing", link: "/marketing" },
      { icon: "/staff.png", label: "Staff Augmentation", link: "/staff" },
    ],
  },
  {
    title: "Resources",
    items: [
      { icon: "/blog.png", label: "Blog", link: "#blog" },
      { icon: "/case.png", label: "Case Studies", link: "#case-studies" },
    ],
  },
  {
    title: "Community",
    items: [
      { icon: "/blog.png", label: "Work with us", link: "/work-with-us" },
      {
        icon: "/partner.png",
        label: "Apply as a Partner Agency",
        link: "/partner",
      },
    ],
  },
];

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null); // Tracks current main menu
  const [currentSubItems, setCurrentSubItems] = useState(null);

  const [openSubItems, setOpenSubItems] = useState(null);
  const toggleSubItems = (index) => {
    setOpenSubItems(openSubItems === index ? null : index);
  };

  const handleItemClick = (subItems) => {
    if (subItems && subItems.length > 0) {
      setCurrentSubItems(subItems);
    }
  };

  const handleMenuClick = (menuIndex) => {
    setCurrentMenu(menuIndex);
    setCurrentSubItems(null);
  };

  const handleBackClick = () => {
    if (currentSubItems) {
      setCurrentSubItems(null); // Go back to main menu items
    } else {
      setCurrentMenu(null); // Go back to main titles
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setCurrentMenu(null);
    setCurrentSubItems(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile) setOpenDropdown(index);
  };

  const toggleFormVisibility = () => {
    console.log("Toggling Form:", !isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  return (
    <header className="header">
      <a href="/" className="head">
        <div className="logo">
          <img src="/emb.png" alt="EMB Global" />
        </div>
      </a>

      {isMobile && (
        <button className="burger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

    {
      isMobile ? 
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        {/* Back Button */}
        <div>
        {(currentMenu !== null || currentSubItems) && (
          <button className="back-btn" onClick={handleBackClick} style={{display:"block"}}>
            ← Back
          </button>
        )}
</div>
        {/* Display Main Titles */}
        {currentMenu === null && !currentSubItems && (
          <div className="menu">
            {dropdownData.map((menu, index) => (
              <div
                key={index}
                className="menu-title"
                onClick={() => handleMenuClick(index)}
              >
                {menu.title}
              </div>
            ))}
          </div>
        )}

        {/* Display Main Items */}
        {currentMenu !== null && !currentSubItems && (
          <div className="menu-items">
            {dropdownData[currentMenu].items.map((item, idx) => (
              <div
                key={idx}
                className="menu-item"
                onClick={() => handleItemClick(item.subItems)}
              >
                {item.icon && (
                  <img src={item.icon} alt={item.label} className="menu-icon" />
                )}
                {item.link ? (
                  <a href={item.link}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Display Sub-Items */}
        {currentSubItems && (
          <div className="sub-items">
            {currentSubItems.map((subItem, idx) => (
              <a key={idx} href={subItem.link} className="sub-item">
                {subItem.label}
              </a>
            ))}
          </div>
        )}
      </nav>
      :
      <nav
      className={`nav ${isMobile ? (isMenuOpen ? "open" : "closed") : ""}`}
    >
      {dropdownData.map((dropdown, index) => (
        <div className="nav-item dropdown" key={index}>
          <div
            className="content"
            onClick={() =>
              isMobile &&
              setOpenDropdown(openDropdown === index ? null : index)
            }
            onMouseEnter={() => handleMouseEnter(index)}
            aria-haspopup="true"
            aria-expanded={openDropdown === index}
          >
            <span className="Items">{dropdown.title}</span>
            <div
              className={`icon w-icon-dropdown-toggle drop ${
                openDropdown === index ? "open" : ""
              }`}
              aria-hidden="true"
            ></div>
          </div>
          {openDropdown === index && (
            <div className="dropdown-menu">
              {dropdown.items.map((item, idx) => (
                <div key={idx} className="dropdown-item">
                  <a href={item.link}>
                    <img src={item.icon} alt={item.label} />
                    <span>{item.label}</span>
                  </a>
                  {item.subItems && (
                    <div
                      className={`dropdown-item-subitem ${
                        openSubItems === idx ? "visible" : ""
                      }`}
                    >
                      {item.subItems.map((subItem, subIdx) => (
                        <a href={subItem.link} key={subIdx}>
                          <span>{subItem.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>

    }
      
      <button className="contact-sales" onClick={toggleFormVisibility} style={{marginTop:"20px"}}>
        Contact Sales →
      </button>
      {
        <Form
          isFormVisible={isFormVisible}
          onClose={() => setIsFormVisible(false)}
        />
      }
    </header>
  );
};

export default Header;