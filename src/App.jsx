import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ImageSlideShow from "./components/ImageSlideShow";
import DownloadContract from "./components/DownloadContract";
import Header from "./components/Header";
import { ContactUs } from "./components/ContactUs";

function App() {
	
	const images = [
		"https://images.ctfassets.net/xf6mqlbz6glx/3fJFRKF2hElMf8a3j2SPuM/c9f1b2c7f9106316fdd53f78deb81256/All_Ages_Baby_on_Blanket_Childcare.jpg.jpg",
	];

  return (
    <>
			<NavBar />
			<div className="App">
			<Routes>
        <Route path="/" element={<Header />} />
				<Route path="/download-contract" element={<DownloadContract />} />
				<Route path="/contact-form" element={<ContactUs />} />
			</Routes>
			</div>
    </>
	);
}

export default App;
