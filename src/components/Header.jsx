import { useState } from "react";
import { AboutUs } from "../assets/AboutUs";
import ImageSlideShow from "./ImageSlideShow";
import "../styles/Header.css";

function Header() {
	const [showMore, setShowMore] = useState(false);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};
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

	const images = [
		"https://images.ctfassets.net/xf6mqlbz6glx/3fJFRKF2hElMf8a3j2SPuM/c9f1b2c7f9106316fdd53f78deb81256/All_Ages_Baby_on_Blanket_Childcare.jpg.jpg",
	];

	const displayAboutUs = () => {
    if (window.innerWidth < 768) {
      return showMore ? AboutUs : AboutUs.slice(0, 282);
    } else {
      return AboutUs;
    }
  };

	return (
		<>
			<div className="header-container">
				<h1 className="floating-text">
					{createSpans(`Mary's`)}
					<br />
					{createSpans("Daycare")}
				</h1>
				<div className="about">
       {displayAboutUs()}
          {!showMore && (
            <span className="about-ellipsis" onClick={handleShowMore}>
              ...
            </span>
          )}
          {showMore && (
            <button className="read-less-btn" onClick={handleShowMore}>
              Read Less
            </button>
          )}
        </div>
			</div>
			<ImageSlideShow images={images} />
		</>
	);
}

export default Header;
