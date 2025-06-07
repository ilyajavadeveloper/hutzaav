import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AtelierSection.module.css";

const atelierImages = [
  "/gallery4.jpg",
  "/clothing13.jpg",
  "/clothing3.jpg"
];

export default function AtelierSection() {
  const { t } = useTranslation();

  return (
    <section id="atelier" className={styles.atelier}>
      <h2 className={styles.title}>{t("atelier_title")}</h2>
      <div className={styles.grid}>
        {atelierImages.map((src, i) => (
          <div key={i} className={styles.card}>
            <img src={src} alt={`Atelier ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
