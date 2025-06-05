// Project: hutzaav - אתר סטודיו לתפירה בהתאמה אישית

import React from "react";

// Основные секции сайта
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";;

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AtelierSection from "./components/AtelierSection";
import ClothingSection from "./components/ClothingSection";
import PaintingSection from "./components/PaintingSection";

function App() {
  return (
    <>
 <Navbar />
      <HeroSection />
      <AboutSection />
      <AtelierSection />
      <ClothingSection />
      <PaintingSection /> {/* ← добавляем сюда */}
  
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
