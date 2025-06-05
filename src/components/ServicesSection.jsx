import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ServiceSection.module.css";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services_tailoring"),
      description: t("services_tailoring_desc"),
    },
    {
      title: t("services_evening_dresses"),
      description: t("services_evening_dresses_desc"),
    },
    {
      title: t("services_repairs"),
      description: t("services_repairs_desc"),
    },
    {
      title: t("services_home_decor"),
      description: t("services_home_decor_desc"),
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>{t("services_title")}</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
