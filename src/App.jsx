import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import HoursInfo from "./components/HoursInfo";
import Enroll from "./components/Enroll";
import Location from "./components/Location";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<NavBar />
			<main id="main">
				<Hero />
				<About />
				<Highlights />
				<Gallery />
				<HoursInfo />
				<Enroll />
				<Location />
				<ContactUs />
			</main>
			<Footer />
		</>
	);
}

export default App;
