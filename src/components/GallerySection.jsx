import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./GallerySection.module.css";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
];

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className={styles.gallery}>
      <h2 className={styles.title}>{t("gallery_title")}</h2>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.card}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
