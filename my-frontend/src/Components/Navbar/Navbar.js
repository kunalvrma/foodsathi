import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdAccountCircle, MdHandshake } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, logout } = useAuth();  // Get user and logout function from context
  const navigate = useNavigate();

  const toggleNav = () => setIsActive(!isActive);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "#" },
    { name: "Learn", link: "#" },
    { name:"Request Donation", link: "/donationRequestForm" },
    { name:"Contact Us", link: "/contactUs" },
  ];

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate('/login');
  };

  // Handle logout and redirect to home page
  const handleLogoutClick = () => {
    logout();  // Logout the user
    navigate('/');  // Redirect to the home page after logout
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

            {/* Show Login button if user is not logged in */}
            {!user ? (
              <li className="navItem">
                <button className="btn" aria-label="Login Button" onClick={handleLoginClick}>Login</button>
              </li>
            ) : (
              <>
                {/* Show Dashboard if the user is logged in */}
                <li className="navItem">
                  <Link to="/dashboard" className="myProfile">
                    <MdAccountCircle />
                  </Link>
                </li>
                {/* Show Logout button if the user is logged in */}
                <li className="navItem">
                  <button className="btn" onClick={handleLogoutClick}>Logout</button>
                </li>
              </>
            )}

            <li className="navItem">
              <Link to="/donationForm" className="btn" aria-label="Donate Button">Donate</Link>
            </li>

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