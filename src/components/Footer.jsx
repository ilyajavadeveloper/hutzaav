import React from "react";
import styles from "./Footer.module.css";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} HUTZAAV — כל הזכויות שמורות</p>

        <div className={styles.links}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} /> אינסטגרם
          </a>

          <a
            href="https://wa.me/972585877708"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <Phone size={18} /> 058-587-7708
          </a>

          <a href="mailto:Hutzahav@gmail.com">
            <Mail size={18} /> Hutzahav@gmail.com
          </a>

          <a
            href="https://maps.google.com/?q=Shavei Tzion 2, Ashdod"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={18} /> Shavei Tzion 2, Ashdod
          </a>
        </div>
      </div>
    </footer>
  );
}
