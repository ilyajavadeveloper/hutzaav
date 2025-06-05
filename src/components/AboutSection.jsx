import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>{t("about_title")}</h2>
        <p>{t("about_text")}</p>
      </div>
    </section>
  );
}
