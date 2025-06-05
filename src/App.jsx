// Project: hutzaav - אתר סטודיו לתפירה בהתאמה אישית

import React from "react";

// Основные секции сайта
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Навигация */}
      <Navbar />

      {/* Главная секция с баннером */}
      <HeroSection />

      {/* Описание студии */}
      <AboutSection />

      {/* Галерея работ */}
      <GallerySection />

      {/* Услуги */}
      <ServicesSection />

      {/* Контактная форма + WhatsApp */}
      <ContactSection />

      {/* Футер */}
      <Footer />
    </>
  );
}

export default App;
