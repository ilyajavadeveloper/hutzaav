import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#home">HUTZAAV</a>
      </div>

      <div
        className={`${styles.burger} ${isMobileOpen ? styles.open : ""}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`${styles.navLinks} ${isMobileOpen ? styles.showMenu : ""}`}>
        <li><a href="#home">{t("nav_home")}</a></li>
        <li><a href="#about">{t("nav_about")}</a></li>
        <li><a href="#atelier">{t("atelier_title")}</a></li>
        <li><a href="#clothing">{t("clothing_title")}</a></li>
        <li><a href="#painting">{t("painting_title")}</a></li>
        <li><a href="#contact">{t("nav_contact")}</a></li>
      </ul>

      <div className={styles.langSwitch}>
        <button onClick={() => changeLanguage("he")}>עב</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
    </nav>
  );
}
