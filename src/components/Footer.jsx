import React from "react";
import styles from "./Footer.module.css";
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} HUTZAAV — כל הזכויות שמורות
        </p>

        <div className={styles.links}>
          <a
            href="https://www.instagram.com/hutzahav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} /> אינסטגרם
          </a>

          <a
            href="https://www.facebook.com/hutzahav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={18} /> פייסבוק
          </a>

          <a
            href="https://wa.me/972585877708"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={18} /> WhatsApp: 058-587-7708
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Hutzahav@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={18} /> Hutzahav@gmail.com
          </a>

          <a
            href="https://maps.google.com/?q=Shavei Tzion 2, Ashdod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={18} /> Shavei Tzion 2, Ashdod
          </a>

          <a
            href="https://hutzahav.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={18} /> www.hutzahav.com
          </a>
        </div>
      </div>
    </footer>
  );
}
