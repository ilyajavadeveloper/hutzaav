import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactSection.module.css";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>{t("contact_title")}</h2>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={t("form_name")} required />
        <input type="email" placeholder={t("form_email")} required />
        <textarea placeholder={t("form_message")} rows="5" required></textarea>
        <button type="submit">{t("form_send")}</button>
      </form>

      <div className={styles.contactInfo}>
        <p>{t("contact_alt_text")}</p>

        <a href="mailto:Hutzahav@gmail.com">
          <FaEnvelope /> Hutzahav@gmail.com
        </a>

        <a
          href="https://wa.me/972585877708"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp: 058-587-7708
        </a>

  
      </div>
    </section>
  );
}
