import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          resetForm();
				},
				(error) => {
					console.log(error.text);
				}
			);
  };
  
  const resetForm = () => {
		form.current.reset();
	};


	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
};
