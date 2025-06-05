// components/Navbar.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Hutzahav</div>

      <div
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <li><a href="#home">{t("nav_home")}</a></li>
        <li><a href="#about">{t("nav_about")}</a></li>
        <li><a href="#gallery">{t("nav_gallery")}</a></li>
        <li><a href="#services">{t("nav_services")}</a></li>
        <li><a href="#contact">{t("nav_contact")}</a></li>
        <div className={styles.langSwitch}>
          <button onClick={() => changeLanguage("he")}>עב</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </ul>
    </nav>
  );
}
