import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { MdAccountCircle, MdHandshake } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import the useAuth hook
import Notification from '../Notification/Notification'; // Adjust the path correctly
import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false); // for drop down in account icon

  const [isActive, setIsActive] = useState(false);

  const {auth, logout } = useAuth();  // Get user and logout function from context
  const user=auth.user;
  const navigate = useNavigate();

 

  const toggleNav = () => setIsActive(!isActive);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/About" },
    { name: "Learn", link: "/learn" },
    { name: "Request Donation", link: "/donationRequestForm" },
    { name: "Contact Us", link: "/contactUs" },
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
          <Link to="/" className="logo flex">
            <h1>
              <MdHandshake className="icons" />
              FoodSathi
            </h1>
          </Link>
        </div>

        <div className={`navBar ${isActive ? "activeNavbar" : ""}`}>
          <ul className="navLists flex">
            {navItems.map(item => (
              <li key={item.name} className="navItem">
                <Link to={item.link} className="navLink">{item.name}</Link>
              </li>
            ))}

            {/* notification */}
            <li className="navItem">
            <Notification />
            </li>

            {/* Show Login button if user is not logged in */}
            {!user ? (
              <li className="navItem">
                <button className="btn" aria-label="Login Button" onClick={handleLoginClick}>Login</button>
              </li>
            ) : (
              <>
                {/* Show Dashboard if the user is logged in */}
               <li className="navItem dropdownWrapper">
                   <div className="accountIcon" onClick={() => setShowDropdown(!showDropdown)}>
                     <MdAccountCircle size={24} />
                   </div>
                {/* Show Logout button if the user is logged in */}
                  {showDropdown && (
                       <ul className="dropdownMenu">
                          <li onClick={() => { setShowDropdown(false);  if (user?.role === 'ngo') {
      navigate('/ngo-dashboard/*');
    } else if (user?.role === 'restaurant') {
      navigate('/restaurant-dashboard');
    } else {
      navigate('/'); // fallback or general dashboard
    } }}>Profile</li>
                         <li onClick={() => { setShowDropdown(false); handleLogoutClick(); }}>Logout</li>
                       </ul>
  )}
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
        
{/* Account icon for mobile (outside nav menu) */}
{user && (
  <div className="account-mobile">
    <div className="accountIcon" onClick={() => setShowDropdown(!showDropdown)}>
      <MdAccountCircle size={24} />
    </div>
    {showDropdown && (
      <ul className="dropdownMenu mobileDropdown">
        <li onClick={() => {
          setShowDropdown(false);
          if (user?.role === 'ngo') {
            navigate('/ngo-dashboard');
          } else if (user?.role === 'restaurant') {
            navigate('/restaurant-dashboard');
          } else {
            navigate('/');
          }
        }}>Profile</li>
        <li onClick={() => { setShowDropdown(false); handleLogoutClick(); }}>Logout</li>
      </ul>
    )}
  </div>
)}

        <div onClick={toggleNav} className="toggleNavbar" aria-label="Toggle Navigation">
          <TbGridDots />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;