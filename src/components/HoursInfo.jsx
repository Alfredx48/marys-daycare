import Icon from "./Icon";
import { hours, whatToBring } from "../content";
import "../styles/HoursInfo.css";

function HoursInfo() {
	return (
		<section id="hours" className="section" aria-labelledby="hours-title">
			<div className="container">
				<p className="eyebrow">Good to know</p>
				<h2 id="hours-title">Hours &amp; what to expect</h2>

				<div className="info-grid">
					<div className="card">
						<h3>
							<Icon name="clock" /> Hours
						</h3>
						<dl className="hours-list">
							{hours.map((row) => (
								<div key={row.days}>
									<dt>{row.days}</dt>
									<dd>{row.time}</dd>
								</div>
							))}
						</dl>
						<p className="muted">Please call if your child will be late or absent that day.</p>
					</div>

					<div className="card">
						<h3>
							<Icon name="check" /> What to bring
						</h3>
						<ul className="check-list">
							{whatToBring.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HoursInfo;
