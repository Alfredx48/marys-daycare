import { aboutParagraphs, business } from "../content";
import "../styles/About.css";

function About() {
	return (
		<section id="about" className="section">
			<div className="container about-grid">
				<div>
					<p className="eyebrow">About us</p>
					<h2>Family-owned care, right in the neighborhood</h2>
				</div>
				<div className="about-body">
					{aboutParagraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
					<p className="signature">
						— {business.owner}, owner &amp; caregiver
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
