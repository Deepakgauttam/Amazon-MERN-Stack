import React from "react";
import HomePageProductContainer from "./HomePageProduct/HomePageProductContainer";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <ImageSlider />
      <HomePageProductContainer />
    </div>
  );
}

export default LandingPage;
