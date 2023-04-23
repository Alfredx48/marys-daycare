import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

	const toggleMenu = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
  };

  const navHome = () => {
    navigate("/")
  }


	return (
    <nav>
      <div onClick={navHome} className="home">
        <h5 > Mary's DayCare</h5>
      </div>
			<div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<span></span>
				<span></span>
			</div>
			{isOpen ? (
				<div className="menu">
					<Link to="/contact-form"> <a> Contact us </a> </Link> 
					<Link to="/download-contract"> <a >Contract</a></Link>
					<a>Info</a>
				</div>
			) : null}
		</nav>
	);
};

export default NavBar;
