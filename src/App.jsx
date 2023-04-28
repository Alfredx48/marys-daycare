import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import DownloadContract from "./components/DownloadContract";
import Header from "./components/Header";
import { ContactUs } from "./components/ContactUs";

function App() {
	
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
