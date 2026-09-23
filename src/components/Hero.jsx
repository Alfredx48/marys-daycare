import Title from "./Title";
import Icon from "./Icon";
import { business, yearsOpen } from "../content";
import "../styles/Hero.css";

function Hero() {
	return (
		<section id="top" className="hero">
			<div className="container hero-grid">
				<div className="hero-copy">
					<p className="eyebrow">{business.type} · Foster City, CA</p>
					<Title text={business.name} />
					<p className="hero-lead">
						A warm, safe home away from home where little ones play, learn, and are loved,
						with {yearsOpen} years of caring for Foster City families.
					</p>
					<div className="hero-actions">
						<a className="btn btn-primary" href={business.phoneHref}>
							<Icon name="phone" size={20} />
							Call {business.phone}
						</a>
						<a className="btn btn-secondary" href="#contact">
							Schedule a visit
						</a>
					</div>
					<ul className="hero-facts">
						<li>
							<Icon name="clock" size={20} /> Mon–Fri, 8 am – 5:30 pm
						</li>
						<li>
							<Icon name="shield" size={20} /> State licensed
						</li>
						<li>
							<Icon name="meal" size={20} /> Home-cooked meals
						</li>
					</ul>
				</div>

				<HouseIllustration />
			</div>
		</section>
	);
}

function HouseIllustration() {
	return (
		<svg className="hero-art" viewBox="0 0 400 360" role="img" aria-label="Illustration of a cozy house under a smiling sun">
			<circle cx="320" cy="70" r="42" fill="var(--sun)" />
			<path d="M305 72q15 14 30 0" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round" />
			<circle cx="307" cy="60" r="4" fill="var(--ink)" />
			<circle cx="333" cy="60" r="4" fill="var(--ink)" />

			<ellipse cx="200" cy="330" rx="190" ry="22" fill="var(--grass)" />

			<rect x="80" y="160" width="220" height="165" rx="10" fill="var(--paper)" stroke="var(--ink)" strokeWidth="5" />
			<path d="M58 172 190 70l132 102" fill="var(--coral)" stroke="var(--ink)" strokeWidth="5" strokeLinejoin="round" />
			<rect x="165" y="230" width="52" height="95" rx="26" fill="var(--teal)" stroke="var(--ink)" strokeWidth="5" />
			<circle cx="205" cy="280" r="4" fill="var(--sun)" />
			<rect x="102" y="200" width="44" height="44" rx="8" fill="var(--sky)" stroke="var(--ink)" strokeWidth="5" />
			<rect x="236" y="200" width="44" height="44" rx="8" fill="var(--sky)" stroke="var(--ink)" strokeWidth="5" />
			<path d="M200 138s-12-7-12-15a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 8-12 15-12 15Z" fill="var(--coral)" stroke="var(--ink)" strokeWidth="3" />

			<g className="hero-balloon">
				<path d="M48 250q6 40-4 80" stroke="var(--ink)" strokeWidth="2.5" fill="none" />
				<ellipse cx="48" cy="222" rx="24" ry="30" fill="var(--teal-soft)" stroke="var(--ink)" strokeWidth="4" />
			</g>
			<rect x="318" y="290" width="32" height="32" rx="4" fill="var(--sun)" stroke="var(--ink)" strokeWidth="4" />
			<rect x="340" y="258" width="32" height="32" rx="4" fill="var(--coral)" stroke="var(--ink)" strokeWidth="4" transform="rotate(8 356 274)" />
		</svg>
	);
}

export default Hero;
