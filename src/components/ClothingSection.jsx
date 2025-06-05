import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ClothingSection.module.css";

const images = [
    "/clothing1.jpg",
  "/clothing3.jpg",
  "/clothing4.jpg",
  "/clothing8.jpg",
  "/clothing10.jpg",
  "/clothing11.jpg",
  "/clothing12.jpg",
  "/clothing13.jpg",
  "/clothing14.jpg",
  "/clothing15.jpg",
  "/clothing16.jpg",

  "/clothing18.jpg",

];

export default function ClothingSection() {
  const { t } = useTranslation();

  return (
    <section id="clothing" className={styles.section}>
      <h2 className={styles.title}>{t("clothing_title")}</h2>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <div key={i} className={styles.card}>
            <img src={src} alt={`Clothing ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
