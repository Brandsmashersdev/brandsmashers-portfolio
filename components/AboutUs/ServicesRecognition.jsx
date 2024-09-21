import React from 'react';
import Image from 'next/image';
import styles from '@/styles/AboutUs/ServiceRecognition.module.css';
import { recognitions, services } from '../../data/AboutServices';

const RecognitionAndServices = () => {
  return (
    <div className={styles.container}>
      <section className={styles.recognition}>
        <h2>Recognition</h2>
        <div className={styles.recognitionLogos}>
          {recognitions.map((recognition, index) => (
            <Image
              key={index}
              src={recognition.src}
              alt={recognition.alt}
              width={100}  // Adjust width as needed
              height={100} // Adjust height as needed
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
              <Image
                src={service.icon}
                alt={service.title}
                width={100}  // Adjust width as needed
                height={100} // Adjust height as needed
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
