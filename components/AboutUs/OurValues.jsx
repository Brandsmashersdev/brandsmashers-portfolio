import React from 'react';
import styles from '@/styles/AboutUs/OurValues.module.css';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import valuesData from '../../data/AboutValues'; // Import the data from the separate JS file

const ValuesComponent = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {valuesData.map((value, index) => (
            <div key={index} className={styles.valueCard}>
            <div className={styles.valuesHeading}>
              <IoMdCheckmarkCircleOutline className={styles.icon} />
              <div className={styles.valuesContent}>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesComponent;
