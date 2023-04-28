import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const toggleMenu = (e) => {
		setIsOpen(!isOpen);
	};

	const navHome = () => {
		navigate("/");
	};

	return (
		<nav>
		{ location.pathname === "/"  ? null : <div onClick={navHome} className="home">
				<h5> Mary's DayCare</h5>
			</div>}
			<div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<span></span>
				<span></span>
			</div>
			{isOpen ? (
				<div className="menu">
					<Link to="/contact-form">
						{" "}
						Contact us {" "}
					</Link>
					<Link to="/download-contract">
						{" "}
						Contract
					</Link>
					{/* <a>Info</a> */}
				</div>
			) : null}
		</nav>
	);
};

export default NavBar;
