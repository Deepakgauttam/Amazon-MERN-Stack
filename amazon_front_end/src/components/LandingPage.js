import React from "react";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="container-fluid px-0">
      <Navbar />
      <ImageSlider />
    </div>
  );
}

export default LandingPage;
