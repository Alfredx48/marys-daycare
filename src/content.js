// All of the daycare's details live here, so updating the site never means
// digging through components. Facts come from the enrollment contract in
// public/daycare-contract.pdf.

export const business = {
	name: "Mary's Daycare",
	owner: "Mary Kopti",
	type: "Licensed Family Child Care",
	// The original About text (written 2023) said "18 years", so the daycare opened around 2005.
	openedYear: 2005,
	phone: "650-630-0151",
	phoneHref: "tel:+16506300151",
	address: {
		street: "851 Schooner St",
		city: "Foster City",
		state: "CA",
		zip: "94404",
	},
	// Optional: add the state license number and it will show in the footer.
	licenseNumber: "",
	mapsLink: "https://www.google.com/maps/search/?api=1&query=851+Schooner+St+Foster+City+CA+94404",
	mapEmbed:
		"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12652.848974421726!2d-122.261711!3d37.550063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98d44f9957c3%3A0x1c8fb292fd0ad70e!2s851%20Schooner%20St%2C%20Foster%20City%2C%20CA%2094404!5e0!3m2!1sen!2sus!4v1685059355308!5m2!1sen!2sus",
	contractPdf: "/daycare-contract.pdf",
};

export const yearsOpen = new Date().getFullYear() - business.openedYear;

export const hours = [
	{ days: "Monday – Friday", time: "8:00 am – 5:30 pm" },
	{ days: "Saturday & Sunday", time: "Closed" },
];

export const aboutParagraphs = [
	`Mary's Daycare is a family-owned, licensed child care home in Foster City. For ${yearsOpen} years, Mary has cared for neighborhood children as if they were her own, in a warm, safe home where little ones can grow at their own pace.`,
	"Days balance play-based learning with structured activities that support each child's physical, emotional, and social development. Because we're a small home daycare, every child gets individual attention, and every parent knows exactly who is caring for their child.",
	"Home-cooked, balanced meals with fruits, vegetables, and proteins are part of what makes the day feel like family.",
];

export const highlights = [
	{
		icon: "blocks",
		title: "Play-based learning",
		text: "Hands-on play and structured activities that build curiosity, language, and confidence.",
	},
	{
		icon: "meal",
		title: "Home-cooked meals",
		text: "Nutritious meals made fresh in our kitchen. Ask about joining the meal program.",
	},
	{
		icon: "tree",
		title: "Neighborhood outings",
		text: "Short walking trips to the park and public library when the weather is nice.",
	},
	{
		icon: "heart",
		title: "Small & personal",
		text: "A family-style group where every child is known, loved, and looked after.",
	},
	{
		icon: "sprout",
		title: "Potty training support",
		text: "When your child is ready, we work together with you to make it a success.",
	},
	{
		icon: "shield",
		title: "Licensed & safe",
		text: "Licensed by the California Department of Social Services, with background-checked caregivers.",
	},
];

export const whatToBring = [
	"Diapers and wipes, if your child uses them",
	"A spare change of clothes",
	"Food and drinks, unless your child is on the meal program",
	"Any medicine in its original labeled container, with a signed medication form",
];

// Add real photos of the daycare (put files in public/photos/) and a gallery
// section will appear automatically. Skip photos that show children's faces
// unless their parents have given permission.
// Example: { src: "/photos/playroom.jpg", alt: "Bright playroom with toy shelves" }
export const photos = [];
