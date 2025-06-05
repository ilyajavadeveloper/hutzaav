// HeroSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.left}>
        <img src="/clothing11.jpg" alt="Studio owner" className={styles.heroImage} />
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{t("hero_title")}</h1>
        <p className={styles.subtitle}>{t("hero_subtitle")}</p>
        <a href="#contact" className={styles.cta}>{t("hero_cta")}</a>
      </div>
    </section>
  );
}
