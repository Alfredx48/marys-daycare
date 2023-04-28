import React, { useState, useEffect  } from "react";
import { AboutUs } from "../assets/AboutUs";
import ImageSlideShow from "./ImageSlideShow";
import "../styles/Header.css";

const images = [
	"https://images.ctfassets.net/xf6mqlbz6glx/3fJFRKF2hElMf8a3j2SPuM/c9f1b2c7f9106316fdd53f78deb81256/All_Ages_Baby_on_Blanket_Childcare.jpg.jpg",
];

const MemoizedImageSlideShow = React.memo(ImageSlideShow);

function Header() {
	const [showMore, setShowMore] = useState(false);
	const [displayedAboutUs, setDisplayedAboutUs] = useState("");

	const updateAboutUs = () => {
		if (window.innerWidth < 768) {
			setDisplayedAboutUs(showMore ? AboutUs : AboutUs.slice(0, 290));
		} else {
			setDisplayedAboutUs(AboutUs);
		}
	};

	const handleShowMore = () => {
		setShowMore((prevShowMore) => !prevShowMore);
	};

	useEffect(() => {
		updateAboutUs();
		window.addEventListener("resize", updateAboutUs);

		return () => {
			window.removeEventListener("resize", updateAboutUs);
		};
	}, [showMore]);

	const createSpans = (text) =>
		text.split("").map((char, index) => (
			<span
				key={index}
				className="char"
				style={{ "--animation-delay": `${index * 50}ms` }}
			>
				{char}
			</span>
		));

	return (
		<>
			<div className="header-container">
				<h1 className="floating-text">
					{createSpans(`Mary's`)}
					<br />
					{createSpans("Daycare")}
				</h1>
				<div className="about">
					{displayedAboutUs}
					{showMore ? (
						<button className="read-less-btn" onClick={handleShowMore}>
							Read Less
						</button>
					) : (
						<span className="about-ellipsis" onClick={handleShowMore}>
							Read More
						</span>
					)}
				</div>
			</div>
			<MemoizedImageSlideShow images={images} />
		</>
	);
}

export default Header;
