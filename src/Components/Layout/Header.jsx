import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const goHome = () => {
        window.location.href = "/";
  };

  return (
    <header className="mainheader">
      <div className="childheader">

        {/* Logo */}
        <div className="logoheader" style={{cursor:"pointer"}} onClick={goHome}>
          <img src="src\assets\removeBg.webp" alt="logo" />
          <h2>
            <span className="ehub">eH</span>ub
          </h2>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-btn" onClick={toggleMenu}>
          {isOpen ? <BiX size={25} /> : <BsList size={25} />}
        </div>

        {/* Navbar Links */}
        <nav className={`contentheader ${isOpen ? "active" : ""}`}>
          <div className="comon">           
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </div>

          <div className="comon">
            
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </div>

          <div className="comon">
            
            <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          </div>

          <div className="comon">           
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;
