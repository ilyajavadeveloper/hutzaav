// Project: hutzaav - אתר סטודיו לתפירה בהתאמה אישית

import React from "react";

import HeroSection from "./components/HeroSection";

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AtelierSection from "./components/AtelierSection";
import ClothingSection from "./components/ClothingSection";
import PaintingSection from "./components/PaintingSection";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
 <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <AtelierSection />
      <ClothingSection />
      <PaintingSection /> {/* ← добавляем сюда */}
  
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
