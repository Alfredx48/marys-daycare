import { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "./Icon";
import { business } from "../content";
import "../styles/ContactUs.css";

// EmailJS keys are meant to be public. Restrict allowed domains in the EmailJS dashboard.
const EMAILJS = {
	serviceId: "service_w1an0v6",
	templateId: "template_rt0e74a",
	publicKey: "cWZHoBRw_PR2wBlwi",
};

function ContactUs() {
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formEl = e.currentTarget;
		const data = Object.fromEntries(new FormData(formEl));

		// Hidden field that only bots fill in.
		if (data.company) return;

		// The EmailJS template only knows user_name, user_email and message,
		// so the optional details are folded into the message.
		const details = [
			data.phone && `Phone: ${data.phone}`,
			data.child_age && `Child's age: ${data.child_age}`,
		].filter(Boolean);
		const message = details.length ? `${details.join("\n")}\n\n${data.message}` : data.message;

		setStatus("sending");
		try {
			await emailjs.send(
				EMAILJS.serviceId,
				EMAILJS.templateId,
				{ user_name: data.user_name, user_email: data.user_email, message },
				{ publicKey: EMAILJS.publicKey, limitRate: { throttle: 10000 } }
			);
			formEl.reset();
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	};

	return (
		<section id="contact" className="section section-tinted" aria-labelledby="contact-title">
			<div className="container contact-grid">
				<div>
					<p className="eyebrow">Contact</p>
					<h2 id="contact-title">We'd love to meet your family</h2>
					<p>
						Have a question or want to schedule a visit? Send a message and Mary will get back to
						you soon. For the fastest answer, give us a call.
					</p>
					<a className="contact-phone" href={business.phoneHref}>
						<Icon name="phone" />
						{business.phone}
					</a>
				</div>

				<form className="card contact-form" onSubmit={handleSubmit}>
					<div className="field">
						<label htmlFor="user_name">Your name</label>
						<input id="user_name" name="user_name" type="text" autoComplete="name" required />
					</div>
					<div className="field-row">
						<div className="field">
							<label htmlFor="user_email">Email</label>
							<input id="user_email" name="user_email" type="email" autoComplete="email" required />
						</div>
						<div className="field">
							<label htmlFor="phone">
								Phone <span className="optional">(optional)</span>
							</label>
							<input id="phone" name="phone" type="tel" autoComplete="tel" />
						</div>
					</div>
					<div className="field">
						<label htmlFor="child_age">
							Child's age <span className="optional">(optional)</span>
						</label>
						<input id="child_age" name="child_age" type="text" placeholder="e.g. 18 months" />
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" rows="5" required />
					</div>
					<div className="honeypot" aria-hidden="true">
						<label htmlFor="company">Company</label>
						<input id="company" name="company" type="text" tabIndex="-1" autoComplete="off" />
					</div>

					<button className="btn btn-primary" type="submit" disabled={status === "sending"}>
						{status === "sending" ? "Sending…" : "Send message"}
					</button>

					<p className={`form-status ${status}`} role="status" aria-live="polite">
						{status === "sent" && "Thank you! Your message was sent. Mary will be in touch soon."}
						{status === "error" && (
							<>
								Sorry, something went wrong. Please try again or call{" "}
								<a href={business.phoneHref}>{business.phone}</a>.
							</>
						)}
					</p>
				</form>
			</div>
		</section>
	);
}

export default ContactUs;
