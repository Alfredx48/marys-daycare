import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactUs.css";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_w1an0v6",
				"template_rt0e74a",
				form.current,
				"cWZHoBRw_PR2wBlwi"
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

  return (
    <div>
      <h1 className="header"> Send Me an Email</h1>
		<form className="contact-form" ref={form} onSubmit={sendEmail}>
			<label className="contact-label">Name</label>
			<input autoComplete="false" required className="contact-input" type="text" name="user_name" />
			<label className="contact-label">Email</label>
			<input required className="contact-input" type="email" name="user_email" />
			<label className="contact-label">Message</label>
			<textarea required className="contact-input" name="message" />
			<input className="submit" type="submit" value="Send" />
		</form>
    </div>
	);
};
