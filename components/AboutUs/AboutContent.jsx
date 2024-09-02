import React from 'react';
import styles from '@/styles/AboutUs/AboutContent.module.css';

const AboutContent = () => {
  return (
    <div className={styles.aboutContent}>
      <p>We are a Consummate Custom Software Development company delivering splendid business IT Solutions and related services to customers across the globe. Our development services are led by our dedicated and passionate team to provide best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our proficiency in understanding business challenges and professional competence allows us to create a better experience for our customers.</p>
      <div className={styles.aboutStats}>
        <div className={styles.stat}>
          <p>We have successfully served for more than 1800 success stories ranging from Enterprise level to Start-ups, who have grown alongside the success of the company.</p>
        </div>
        <div className={styles.stat}>
          <p>At present we are a Robust Team having diverse skills with more than 21+ years of Technology experience engaging with customers at Deeper level to provide cutting edge solutions and innovations.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
