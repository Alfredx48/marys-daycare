import Icon from "./Icon";
import { business } from "../content";
import "../styles/Enroll.css";

const steps = [
	{
		title: "Say hello",
		text: "Call or send a message to check availability and set up a time to visit.",
	},
	{
		title: "Visit & meet Mary",
		text: "See the space, ask questions, and let your child get comfortable.",
	},
	{
		title: "Enroll",
		text: "If it feels like the right fit, fill out the enrollment packet and bring the signed forms on your first day.",
	},
];

function Enroll() {
	return (
		<section id="enroll" className="section section-tinted" aria-labelledby="enroll-title">
			<div className="container">
				<p className="eyebrow">Enrollment</p>
				<h2 id="enroll-title">Getting started is easy</h2>

				<ol className="steps">
					{steps.map((step, index) => (
						<li key={step.title} className="card step">
							<span className="step-number" aria-hidden="true">
								{index + 1}
							</span>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</li>
					))}
				</ol>

				<div className="download-card card">
					<div>
						<h3>Ready to enroll?</h3>
						<p className="muted">
							The enrollment packet has the daycare contract, fees &amp; policies, and the
							required California licensing forms. No need to fill it out before visiting.
							PDF, 11 pages.
						</p>
					</div>
					<a className="btn btn-primary" href={business.contractPdf} download="marys-daycare-enrollment-packet.pdf">
						<Icon name="download" size={20} />
						Download PDF
					</a>
				</div>
			</div>
		</section>
	);
}

export default Enroll;
