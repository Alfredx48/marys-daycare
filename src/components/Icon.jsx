// Small hand-picked line icons, drawn on a 24x24 grid.
const paths = {
	blocks: (
		<>
			<rect x="3" y="13" width="8" height="8" rx="1.5" />
			<rect x="13" y="13" width="8" height="8" rx="1.5" />
			<rect x="8" y="3" width="8" height="8" rx="1.5" />
		</>
	),
	meal: (
		<>
			<path d="M4 12h16a8 8 0 0 1-16 0Z" />
			<path d="M9 8c0-1.5 1-2 1-3.5M13 8c0-1.5 1-2 1-3.5" />
		</>
	),
	tree: (
		<>
			<path d="M12 21v-6" />
			<path d="M12 3a6 6 0 0 0-5.5 8.4A4 4 0 0 0 9 18h6a4 4 0 0 0 2.5-6.6A6 6 0 0 0 12 3Z" />
		</>
	),
	heart: <path d="M12 20s-7.5-4.6-7.5-10.1A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20Z" />,
	sprout: (
		<>
			<path d="M12 21v-9" />
			<path d="M12 12c0-4 3-6 7-6 0 4-3 6-7 6Z" />
			<path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" />
		</>
	),
	shield: (
		<>
			<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
			<path d="m9 12 2 2 4-4" />
		</>
	),
	phone: (
		<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
	),
	clock: (
		<>
			<circle cx="12" cy="12" r="9" />
			<path d="M12 7v5l3 2" />
		</>
	),
	pin: (
		<>
			<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
			<circle cx="12" cy="9.5" r="2.5" />
		</>
	),
	download: (
		<>
			<path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5" />
			<path d="M5 19h14" />
		</>
	),
	check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

function Icon({ name, size = 24 }) {
	return (
		<svg
			className="icon"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			{paths[name]}
		</svg>
	);
}

export default Icon;
