import Icon from "./Icon";
import { highlights } from "../content";
import "../styles/Highlights.css";

function Highlights() {
	return (
		<section className="section section-tinted" aria-labelledby="highlights-title">
			<div className="container">
				<p className="eyebrow">A day at Mary's</p>
				<h2 id="highlights-title">What your child will love</h2>
				<ul className="highlight-grid">
					{highlights.map((item) => (
						<li key={item.title} className="card highlight">
							<span className={`highlight-icon icon-${item.icon}`}>
								<Icon name={item.icon} size={28} />
							</span>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Highlights;
