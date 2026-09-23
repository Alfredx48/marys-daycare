import { faqs } from "../content";
import "../styles/Faq.css";

function Faq() {
	return (
		<section id="faq" className="section section-tinted" aria-labelledby="faq-title">
			<div className="container faq-grid">
				<div>
					<p className="eyebrow">FAQ</p>
					<h2 id="faq-title">Questions parents ask</h2>
					<p className="muted">
						Don't see your question? Give us a call or send a message below.
					</p>
				</div>
				<div className="faq-list">
					{faqs.map((item) => (
						<details key={item.q} className="faq-item">
							<summary>
								<h3>{item.q}</h3>
							</summary>
							<p>{item.a}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}

export default Faq;
