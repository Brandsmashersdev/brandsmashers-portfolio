import React from 'react';
import styles from '@/styles/AboutUs/ServiceRecognition.module.css';
import { recognitions, services } from '../../data/AboutServices';

const RecognitionAndServices = () => {
  return (
    <div className={styles.container}>
      <section className={styles.recognition}>
        <h2>Recognition</h2>
        <div className={styles.recognitionLogos}>
          {recognitions.map((recognition, index) => (
            <img
              key={index}
              src={recognition.src}
              alt={recognition.alt}
              className={styles.recognitionLogo}
            />
          ))}
        </div>
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceBox}>
              <img
                src={service.icon}
                alt={service.title}
                className={styles.serviceIcon}
              />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecognitionAndServices;
