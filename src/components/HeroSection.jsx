import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.imageWrapper}>
        <img src="/clothing11.jpg" alt="Main Visual" className={styles.heroImage} />
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>בגדים בעבודת יד עם נשמה</h1>

        <p className={styles.subtitle}>
          Hutzahav Studio — семейная студия, специализирующаяся на индивидуальном пошиве с более чем 20-летним опытом.
          Мы уделяем внимание качеству, персональному подходу и каждой детали, чтобы каждая вещь стала произведением искусства.
        </p>

        <div className={styles.infoCard}>
          <a href="tel:+972585877708" className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>058-587-7708</span>
          </a>
          <a href="mailto:Hutzahav@gmail.com" className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <span>Hutzahav@gmail.com</span>
          </a>
          <a
            href="https://www.google.com/maps?q=שבי+ציון+2,+אשדוד"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoItem}
          >
            <FaMapMarkerAlt className={styles.icon} />
            <span>שבי ציון 2, אשדוד</span>
          </a>
          <a
            href="https://www.instagram.com/hutzahav"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoItem}
          >
            <FaInstagram className={styles.icon} />
            <span>@hutzahav</span>
          </a>
        </div>

        <a href="#contact" className={styles.cta}>צור קשר</a>
      </div>
    </section>
  );
}
