import React from 'react';
import industriesData from '../../data/Industries';
import styles from '@/styles/Technologies/Industries.module.css';

// Dynamically load the icons
const Industries = () => {
  return (
    <section className={styles.industriesSection}>
      <h2 className={styles.heading}>Industries We Serve</h2>
      <p className={styles.subHeading}>We follow a step process to ensure the best results for our customers.</p>
      <div className={styles.industriesGrid}>
        {industriesData.map((industry, index) => (
          <div key={index} className={styles.industryCard} style={{ backgroundColor: industry.color }}>
            <div className={styles.iconWrapper}>
              {React.createElement(industry.icon)}
            </div>
            <h3 className={styles.industryTitle}>{industry.title}</h3>
            <p className={styles.industryDescription}>{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
