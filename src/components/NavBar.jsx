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
      </div>
      {isOpen && (
        <div className="menu">
          <ul>
            Contact us
          </ul>
          <ul>
            Contract/Paperwork
          </ul>
          <ul>
            Info
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
