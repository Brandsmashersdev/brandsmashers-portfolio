import React from 'react';
import styles from '@/styles/AboutUs/AboutHeader.module.css';
import Image from 'next/image';

const AboutHeader = () => {
  return (
    <div className={styles.aboutHeader}>
     <Image src="/AboutUs/road-marking.jpg" alt="About Us Background" className={styles.backgroundImage} height={30} width={100}/>
      <div className={styles.overlay}>
        <h1>ABOUT US</h1>
        <p>Creating technology solutions that enable businesses to achieve success.</p>
      </div>
    </div>
  );
};

export default AboutHeader;
