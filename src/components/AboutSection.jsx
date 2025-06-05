// AboutSection.jsx
import React from "react";
import styles from "./AboutSection.module.css"
export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>על הסטודיו</h2>
        <p>
          סטודיו משפחתי המתמחה בתפירה אישית, עם ניסיון של למעלה מ-20 שנה בתחום.
          אנו מקפידים על איכות, שירות אישי, והקפדה על כל פרט קטן כדי להפוך כל בגד ליצירת אמנות.
        </p>
      </div>
    </section>
  );
}