import { photos } from "../content";
import "../styles/Gallery.css";

// Only shows up once photos are added in content.js.
function Gallery() {
	if (photos.length === 0) return null;

	return (
		<section className="section" aria-labelledby="gallery-title">
			<div className="container">
				<p className="eyebrow">Take a peek</p>
				<h2 id="gallery-title">Our home daycare</h2>
				<ul className="gallery">
					{photos.map((photo) => (
						<li key={photo.src}>
							<img src={photo.src} alt={photo.alt} loading="lazy" />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Gallery;
