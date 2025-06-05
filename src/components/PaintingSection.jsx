import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./PaintingSection.module.css";

const images = [
  "/paint2.jpg",
  "/paint3.jpg",
  "/paint4.jpg",
  "/paint9.jpg",
  "/paint11.jpg",
  "/paint16.jpg",
  "/paint17.jpg",
  "/paint18.jpg"
];

export default function PaintingSection() {
  const { t } = useTranslation();

  return (
    <section id="painting" className={styles.section}>
      <h2 className={styles.title}>{t("painting_title")}</h2>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <div key={i} className={styles.card}>
            <img src={src} alt={`Painting ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
