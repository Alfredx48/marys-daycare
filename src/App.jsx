import "./App.css";
import NavBar from "./components/NavBar";
import ImageSlideShow from "./components/ImageSlideShow";
import { AboutUs } from "./assets/AboutUs";

function App() {
	const createSpans = (text) =>
		text.split("").map((char, index) => (
			<span
				key={index}
				className="char"
				style={{ "--animation-delay": `${index * 50}ms` }}
			>
				{char}
			</span>
		));

	const images = [
		"https://images.ctfassets.net/xf6mqlbz6glx/3fJFRKF2hElMf8a3j2SPuM/c9f1b2c7f9106316fdd53f78deb81256/All_Ages_Baby_on_Blanket_Childcare.jpg.jpg",
	];

// ...
return (
  <>
    <NavBar />
    <div className="App">
      <div className="header-container">
        <h1 className="floating-text">
          {createSpans("Mary's")}
          <br />
          {createSpans("Daycare")}
        </h1>
        <h3 className="about">
          {AboutUs}
        </h3>
      </div>
      <ImageSlideShow images={images} />
    </div>
  </>
);


}

export default App;