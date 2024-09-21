import React from 'react';
import styles from '../../src/styles/Hero/Service.module.css';
import { services } from '../../data/services';
import Image from 'next/image'; // Import the Image component

const Services = () => {
  return (
    <div className={styles.container}>
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceBox}>
              <Image
                src={service.icon} // Use Image instead of img
                alt={service.title} // Corrected to service.title
                className={styles.serviceIcon}
                width={100} // Set appropriate width
                height={100} // Set appropriate height
              />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
