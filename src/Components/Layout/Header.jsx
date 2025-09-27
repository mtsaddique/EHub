import React, { useState } from "react";
import { FaHome, FaInfo, FaHeadset, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import {BsList} from 'react-icons/bs';
import { BiX } from "react-icons/bi";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mainheader">
      <div className="childheader">
        {/* Logo */}
        <div className="logoheader">
          <img src="src\assets\removeBg.png" alt="logo" />
          <h2>
            <span className="ehub">eH</span>ub
          </h2>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <div className="menu-btn" onClick={toggleMenu}>
          {isOpen ? <BiX size={25} /> : <BsList size={25} />}
        </div>

        {/* Navbar Links */}
        <nav className={`contentheader ${isOpen ? "active" : ""}`}>
          <div className="comon">
            <FaHome size={20} /> <a href="#">Home</a>
          </div>
          <div className="comon">
            <FaInfo size={20} /> <a href="#">About</a>
          </div>
          <div className="comon">
            <FaHeadset size={20} /> <a href="#">Service</a>
          </div>
          <div className="comon">
            <FaPhoneAlt size={20} /> <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
