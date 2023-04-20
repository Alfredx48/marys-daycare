import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isOpen && (
        <div className="menu">
          <ul>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Contract/Paperwork</li>
          </ul>
          <ul>
            <li>Info</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
