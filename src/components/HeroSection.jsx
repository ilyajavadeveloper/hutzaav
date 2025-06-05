import React from "react";
import styles from "./HeroSection.module.css";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="home">
      <img src="/hero.jpg" alt="Hero" className={styles.bgImage} />
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>{t("hero_title")}</h1>
        <p className={styles.subtitle}>{t("hero_subtitle")}</p>
        <a href="#contact" className={styles.cta}>{t("hero_cta")}</a>
      </div>
    </section>
  );
}
