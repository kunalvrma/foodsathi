import React, { useState, useEffect } from "react";
import "./navbar.css";
import { MdHandshake } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleNav = () => setIsActive(!isActive);
  const handleTranslateClick = () => setIsTranslateOpen(!isTranslateOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.translate-dropdown') && !event.target.closest('.translate-icon')) {
        setIsTranslateOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", link: "/" }, // Update link to home
    { name: "About Us", link: "#" },
    { name: "Join", link: "/form" },
    { name: "Learn", link: "#" },
  ];

  const handleLoginClick = () => {
    navigate('/login'); // Use navigate to redirect to the login page
  };

  return (
    <nav className="NavBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <MdHandshake className="icons" />
              FoodSathi.
            </h1>
          </a>
        </div>

        <div className={`navBar ${isActive ? "activeNavbar" : ""}`}>
          <ul className="navLists flex">
            {navItems.map(item => (
              <li key={item.name} className="navItem">
                <a href={item.link} className="navLink">{item.name}</a>
              </li>
            ))}
            <li className="navItem">
              <button className="btn" aria-label="Login Button" onClick={handleLoginClick}>Login</button> {/* Change to button */}
            </li>
            <li className="navItem">
              <button className="btn" aria-label="Donate Button"><a href="#">Donate</a></button>
            </li>
            <li className="navItem">
              <div className="translate-icon" onClick={handleTranslateClick} aria-label="Translate Language">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            </li>
            {isTranslateOpen && (
              <div className={`translate-dropdown ${isTranslateOpen ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faTimes} className="closeNavbar" onClick={handleTranslateClick} />
                <div id="google_translate_element"></div>
              </div>
            )}
            
            <div onClick={toggleNav} className="closeNavBar" aria-label="Close Navigation">
              <IoIosCloseCircle className="icons" />
            </div>
          </ul>
        </div>

        <div onClick={toggleNav} className="toggleNavbar" aria-label="Toggle Navigation">
          <TbGridDots />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;