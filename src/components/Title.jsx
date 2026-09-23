// Each letter floats in one after another. Screen readers get the plain text.
function Title({ text }) {
	return (
		<h1 className="floating-text" aria-label={text}>
			{text.split("").map((char, index) => (
				<span
					key={index}
					className="char"
					aria-hidden="true"
					style={{ "--animation-delay": `${index * 45}ms` }}
				>
					{char === " " ? " " : char}
				</span>
			))}
		</h1>
	);
}

export default Title;
