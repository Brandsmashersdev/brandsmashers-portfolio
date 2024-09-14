import React from 'react';
import styles from '@/styles/AboutUs/AboutContent.module.css';

const AboutContent = () => {
  return (
    <div className={styles.aboutContent}>
      <p>Founded in 2018, Brandsmashers has quickly grown into a trusted name in the world of software development and staff augmentation. We specialize in delivering tailor-made software solutions that drive business success and help companies scale their operations with top-tier talent. By combining technical expertise with innovative solutions, we help our clients navigate the complexities of digital transformation with ease.</p>
      <div className={styles.aboutStats}>
        <div className={styles.stat}>
          <p>Our mission is to empower businesses by providing top-notch software solutions and access to highly skilled talent, helping them accelerate growth and drive innovation. We aim to be a reliable partner that delivers superior quality and sustainable results, enabling our clients to achieve their goals.</p>
        </div>
        <div className={styles.stat}>
          <p>We envision a future where Brandsmashers is the go-to partner for businesses looking to innovate, scale, and thrive in a constantly evolving digital landscape. Our goal is to set new benchmarks in delivering software development and staff augmentation services that propel businesses to new heights.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
