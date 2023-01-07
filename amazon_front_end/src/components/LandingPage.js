import React from "react";
import Footer from "./Footer";
import HomePageProductContainer from "./HomePageProduct/HomePageProductContainer";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <ImageSlider />
      <HomePageProductContainer />
      <Footer/>
    </div>
  );
}

export default LandingPage;
