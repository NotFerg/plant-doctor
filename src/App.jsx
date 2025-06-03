import { React, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import WhyUse from "./components/WhyUse/WhyUse.jsx";
import HowIt from "./components/HowIt/HowIt.jsx";
import Upload from "./components/Upload/Upload.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Upload />
      <HowIt />
      <WhyUse />
      <Footer />
    </>
  );
}

export default App;
