import React from 'react';
import styles from '../../src/styles/Hero/Service.module.css';
import {services} from '../../data/services'; // Notice the correct import name

const Servicess = () => {
  return (
    <div className={styles.container}>
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceBox}>
              <img
                src={service.icon} // Corrected to service.icon
                alt={service.title} // Corrected to service.title
                className={styles.serviceIcon}
              />
              <p>{service.title}</p> {/* Corrected to service.title */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicess;