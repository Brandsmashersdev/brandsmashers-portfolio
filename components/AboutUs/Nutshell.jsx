import React from 'react';
import styles from '@/styles/AboutUs/Nutshell.module.css';

const AboutUs = () => {
  const metrics = [
    { value: "2001", label: "Year of Foundation" },
    { value: "810+", label: "Global Customers" },
    { value: "1080+", label: "IT Professionals" },
    { value: "36", label: "Countries with active customers" },
    { value: "1800+", label: "Completed Projects" },
    { value: "5", label: "Offices" },
    { value: "90%", label: "Customer Retention" },
    { value: "22+", label: "Industries Served" }
  ];

  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.title}>In a Nutshell</h2>
      <div className={styles.metricsContainer}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricBox}>
            <h3 className={styles.metricValue}>{metric.value}</h3>
            <p className={styles.metricLabel}>{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
