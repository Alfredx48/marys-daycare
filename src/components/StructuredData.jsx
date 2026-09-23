import { business, faqs } from "../content";

// Machine-readable details Google uses for search results and Maps.
// Built from content.js so it always matches what the page says.
function StructuredData() {
	const { street, city, state, zip } = business.address;

	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ChildCare",
				"@id": `${business.siteUrl}/#daycare`,
				name: business.name,
				alternateName: ["Mary's Day Care", "Mary Kopti Daycare", "Mary Kopti Family Day Care"],
				description:
					"Family-owned, licensed family child care home in Foster City, CA, serving families in Foster City, San Mateo, and nearby San Mateo County communities.",
				url: `${business.siteUrl}/`,
				telephone: business.phoneHref.replace("tel:", ""),
				image: `${business.siteUrl}/og-image.png`,
				logo: `${business.siteUrl}/android-chrome-512x512.png`,
				founder: { "@type": "Person", name: business.owner },
				foundingDate: String(business.openedYear),
				address: {
					"@type": "PostalAddress",
					streetAddress: street,
					addressLocality: city,
					addressRegion: state,
					postalCode: zip,
					addressCountry: "US",
				},
				geo: { "@type": "GeoCoordinates", latitude: 37.550063, longitude: -122.261711 },
				hasMap: business.mapsLink,
				areaServed: business.serviceArea.map((name) => ({ "@type": "City", name: `${name}, CA` })),
				openingHoursSpecification: [
					{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
						opens: "08:00",
						closes: "17:30",
					},
				],
				...(business.profiles.length > 0 && { sameAs: business.profiles }),
			},
			{
				"@type": "FAQPage",
				"@id": `${business.siteUrl}/#faq`,
				mainEntity: faqs.map((item) => ({
					"@type": "Question",
					name: item.q,
					acceptedAnswer: { "@type": "Answer", text: item.a },
				})),
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
		/>
	);
}

export default StructuredData;
