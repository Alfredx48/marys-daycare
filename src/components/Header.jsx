// Header.js
import React from "react";
import Title from "./Title";
import AboutUs from "./AboutUs";
import ImageSlideShow from "./ImageSlideShow";
import "../styles/Header.css";
import { images } from "../assets/dayCareImages";
import { AboutUsText } from "../assets/AboutUsText";
import Map from "./Map";
import ContactDetails from "./ContactDetails";
import WorkHours from "./WorkHours";

const MemoizedImageSlideShow = React.memo(ImageSlideShow);

function Header() {
  return (
    <>
      <div className="header-container">
        <Title text="Mary's" />
        <Title text="Daycare" />
        <AboutUs text={AboutUsText} />
        <MemoizedImageSlideShow images={images} />
        <div >
          <Map />
          <ContactDetails /> 
          <WorkHours /> 

        </div>
      </div>
    </>
  );
}

export default Header;
