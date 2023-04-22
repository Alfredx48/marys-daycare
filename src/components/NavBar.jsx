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


	return (
		<nav>
			<div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<span></span>
				<span></span>
			</div>
			{isOpen ? (
				<div className="menu">
					<Link to="/contact-form"> <ul> Contact us </ul> </Link> 
					<Link to="/download-contract"> <ul >Contract</ul></Link>
					<ul>Info</ul>
				</div>
			) : null}
		</nav>
	);
};

export default NavBar;
