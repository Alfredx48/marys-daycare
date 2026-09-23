import { useEffect, useState } from "react";
import Icon from "./Icon";
import { business } from "../content";
import "../styles/NavBar.css";

const links = [
	{ href: "#about", label: "About" },
	{ href: "#hours", label: "Hours" },
	{ href: "#enroll", label: "Enroll" },
	{ href: "#location", label: "Location" },
	{ href: "#faq", label: "FAQ" },
	{ href: "#contact", label: "Contact" },
];

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		const onKey = (e) => e.key === "Escape" && setIsOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isOpen]);

	return (
		<header className="site-header">
			<nav className="nav container" aria-label="Main">
				<a href="#top" className="brand" onClick={() => setIsOpen(false)}>
					<span className="brand-mark" aria-hidden="true">M</span>
					{business.name}
				</a>

				<button
					className="menu-toggle"
					aria-expanded={isOpen}
					aria-controls="nav-menu"
					onClick={() => setIsOpen((open) => !open)}
				>
					<span className="visually-hidden">{isOpen ? "Close menu" : "Open menu"}</span>
					<span className="bars" aria-hidden="true" />
				</button>

				<div id="nav-menu" className={`nav-menu ${isOpen ? "open" : ""}`}>
					<ul>
						{links.map((link) => (
							<li key={link.href}>
								<a href={link.href} onClick={() => setIsOpen(false)}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<a className="btn btn-primary btn-small" href={business.phoneHref}>
						<Icon name="phone" size={18} />
						{business.phone}
					</a>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
