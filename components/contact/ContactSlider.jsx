
import React from 'react';
import Image from 'next/image';
import styles from '../../src/styles/Hero/ContactSlider.module.css';
import react from '../../public/Hero/googles.png'; // adjust path as per your project
import ios from '../../public/Hero/googles.png';
import android from '../../public/Hero/googles.png';
import hybrid from  '../../public/Hero/googles.png';
import crossp from '../../public/Hero/googles.png';

const ContactSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      
      <div className={styles.slider}>
       
        <div className={styles.techItem}>
          <Image src={react} alt="React" />
        </div>

        <div className={styles.techItem}>
          <Image src={ios} alt="IOS" />
         </div>

        <div className={styles.techItem}>
          <Image src={android} alt="Android" />
        </div>

        <div className={styles.techItem}>
          <Image src={hybrid} alt="Hybrid" />
        </div>

        <div className={styles.techItem}>
          <Image src={crossp} alt="Cross Platform" />
         </div>

        {/* Duplicate items for smooth scrolling */}
        <div className={styles.techItem}>
          <Image src={react} alt="React" />
         
        </div>
        <div className={styles.techItem}>
          <Image src={ios} alt="IOS" />
         
        </div>
        <div className={styles.techItem}>
          <Image src={android} alt="Android" />
          
        </div>
        <div className={styles.techItem}>
          <Image src={hybrid} alt="Hybrid" />
         
        </div>
        <div className={styles.techItem}>
          <Image src={crossp} alt="Cross Platform" />
         
        </div>
      </div>
    </div>
  );
};

export default ContactSlider;
