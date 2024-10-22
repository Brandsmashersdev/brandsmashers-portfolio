import React from 'react';
import Image from 'next/image';
import styles from '../../src/styles/Hero/OurPartners.module.css';
import clutchs from '../../public/Hero/clutchs.png';
import googles from '../../public/Hero/googles.png';
import glassdoor from '../../public/Hero/GlassdoorLogo.png';
import bsmith from '../../public/Hero/bsmith.png';
const OurPartners = () => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.carouselTitle}>Our Partners</h2>
      <div className={styles.cardGrid}>
        {/* Partner 1 */}
        <div className={styles.card}>
          <Image src={clutchs} width={80} height={80} alt="clutch" />
          <div className={styles.stars}>
            {/* You can use Unicode stars or images */}
            <span>&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>

        {/* Partner 2 */}
        <div className={styles.card}>
          <Image src={googles} width={90} height={90} alt="google" />
          <div className={styles.starsg}>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>

        {/* Partner 4 black smith */}
        <div className={styles.card}>
          <Image src={bsmith} width={90} height={90} alt="black smith" />
          <div className={styles.starsg}>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>

        {/* Partner 3 */}
        <div className={styles.card}>
          <Image src={glassdoor} width={100} height={100} alt="glassdoor" />
          <div className={styles.starsG}>
            <span>&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
