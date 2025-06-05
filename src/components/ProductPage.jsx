import React, { useState } from "react";
import styles from "./ProductPage.module.css";

const images = [
  "/product1.jpg",
  "/product2.jpg",
  "/product3.jpg",
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className={styles.product}>
      <div className={styles.container}>
        {/* Галерея */}
        <div className={styles.gallery}>
          <img
            src={selectedImage}
            alt="Selected"
            className={styles.mainImage}
          />
          <div className={styles.thumbnails}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb ${i}`}
                className={
                  src === selectedImage ? styles.thumbActive : styles.thumb
                }
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>

        {/* Описание */}
        <div className={styles.details}>
          <h1 className={styles.title}>סט מצעים מעוצבים</h1>
          <p className={styles.price}>₪39</p>
          <p className={styles.outOfStock}>לא זמין במלאי ❌</p>
          <a
            href="https://wa.me/972585877708"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsapp}
          >
            דברו איתנו בוואטסאפ 📱
          </a>

          <div className={styles.description}>
            <h3>על המוצר</h3>
            <p>
              סט מצעים איכותי מבד נעים ונושם, עיצוב קלאסי שמתאים לכל חדר שינה. ניתן להזמין בגדלים שונים, בהתאמה אישית.
            </p>
            <ul>
              <li>100% כותנה</li>
              <li>ניתן לכיבוס במכונה</li>
              <li>כולל ציפיות וכיסוי לשמיכה</li>
            </ul>
          </div>

          <div className={styles.reviews}>
            <h3>ביקורות לקוחות</h3>
            <p>אין עדיין ביקורות.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
