import React, { useState, useEffect } from "react";
import "../styles/imageSlideShow.css"

const ImageSlideShow = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((currentImageIndex + 1) % images.length);
		}, 4000);

		return () => clearInterval(intervalId);
	}, [currentImageIndex, images.length]);

	return (
		<div className="image-slideshow">
			<img className="image" src={images[currentImageIndex]} alt="item" />
		</div>
	);
};

export default ImageSlideShow;
