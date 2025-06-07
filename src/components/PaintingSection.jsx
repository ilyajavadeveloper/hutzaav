import React from "react";
import styles from "./PaintingSection.module.css";
import { FaFacebook } from "react-icons/fa";

const paintings = [
  "/paint2.jpg",
  "/paint3.jpg",
  "/paint4.jpg",
  "/paint9.jpg",
  "/paint11.jpg",
  "/paint16.jpg",
  "/paint17.jpg",
  "/paint18.jpg"
];

const photos = [

  "/segey3.jpg",

  
];

export default function PaintingSection() {
  return (
    <section className={styles.section} id="painting">
      <h2 className={styles.title}>Сергей Хвостенко — Художник</h2>

      <div className={styles.bio}>
        <div className={styles.bioText}>
          <p>
            Сергей Хвостенко — художник, дизайнер, преподаватель. Более 20 лет он занимается живописью и прикладным искусством,
            создавая уникальные произведения, наполненные смыслом, формой и чувствами.
          </p>
          <p>
            Родился в 1970 году в Алтайском крае (СССР). Окончил Государственный художественный колледж им. Вучетича в Днепропетровске,
            а затем — Национальную академию изобразительного искусства и архитектуры в Киеве.
          </p>
          <p>
            Сегодня Сергей живёт и работает в Израиле. Его картины — это окно в глубину человеческой души и художественного мышления.
          </p>
          <a
            href="https://www.facebook.com/hvostenkos/about_overview"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.facebookBtn}
          >
            <FaFacebook /> Facebook
          </a>
        </div>

        <div className={styles.bioPhotos}>
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`Sergey ${i + 1}`} />
          ))}
        </div>
      </div>

      <h3 className={styles.galleryTitle}>Галерея картин</h3>
      <div className={styles.grid}>
        {paintings.map((src, i) => (
          <div key={i} className={styles.card}>
            <img src={src} alt={`Painting ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
