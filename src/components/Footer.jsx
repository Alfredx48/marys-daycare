import { business } from "../content";
import "../styles/Footer.css";

function Footer() {
	const { street, city, state, zip } = business.address;

	return (
		<footer className="site-footer">
			<div className="container footer-grid">
				<div>
					<p className="footer-brand">{business.name}</p>
					<p>
						{business.type}
						{business.licenseNumber && ` · License #${business.licenseNumber}`}
					</p>
				</div>
				<div>
					<p>
						{street}, {city}, {state} {zip}
					</p>
					<p>
						<a href={business.phoneHref}>{business.phone}</a>
					</p>
				</div>
			</div>
			<p className="container copyright">
				© {new Date().getFullYear()} {business.name}. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
