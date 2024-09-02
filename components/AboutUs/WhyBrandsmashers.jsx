import React from 'react';
import Image from 'next/image';
import styles from '@/styles/AboutUs/WhyBrandsmashers.module.css';

const AboutUsComponent = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Brandsmashers</h2>
        <p className={styles.description}>
          We leverage our extensive experience and talented resource pool to deliver the top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long term relations.
        </p>
        <div className={styles.features}>
          <div className={styles.featureBox}>
            <Image src="/AboutUs/OneStopSolution.png" alt="One Stop Solution" className={styles.icon} height={100} width={100}/>
            <h3 className={styles.featureHeading}>One - Stop Solution</h3>
            <p className={styles.featureDescription}>
              We offer end-to-end IT services, design, development, quality assurance with a dedicated group of experts for various industry domains and technologies.
            </p>
          </div>
          <div className={styles.featureBox}>
            <Image src="/AboutUs/CustomerFocus.webp" alt="Customer Focus" className={styles.icon} height={100} width={100}/>
            <h3 className={styles.featureHeading}>Customer Focus</h3>
            <p className={styles.featureDescription}>
              In this constantly changing and challenging business world, we aim to provide competent advice as per the custom needs of the client to meet their business goals.
            </p>
          </div>
          <div className={styles.featureBox}>
            <Image src="/AboutUs/Commitment.png" alt="Commitment" className={styles.icon} height={100} width={100}/>
            <h3 className={styles.featureHeading}>Commitment</h3>
            <p className={styles.featureDescription}>
              We deliver the maximum value to our customers by becoming their reliable technology partner. Our success is defined by the success of our customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
