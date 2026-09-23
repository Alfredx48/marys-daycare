import Icon from "./Icon";
import { business } from "../content";
import "../styles/Location.css";

function Location() {
	const { street, city, state, zip } = business.address;

	return (
		<section id="location" className="section" aria-labelledby="location-title">
			<div className="container location-grid">
				<div>
					<p className="eyebrow">Find us</p>
					<h2 id="location-title">In the heart of Foster City</h2>
					<address className="location-address">
						<Icon name="pin" />
						<span>
							{street}
							<br />
							{city}, {state} {zip}
						</span>
					</address>
					<a className="btn btn-secondary" href={business.mapsLink} target="_blank" rel="noreferrer">
						Get directions
					</a>
				</div>
				<iframe
					className="map"
					title={`Map showing ${business.name} at ${street}, ${city}`}
					src={business.mapEmbed}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					allowFullScreen
				/>
			</div>
		</section>
	);
}

export default Location;
