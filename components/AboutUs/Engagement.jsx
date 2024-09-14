import React from 'react';
import styles from '@/styles/AboutUs/Engagement.module.css';

const Engagement = () => {
  return (
    <div className={styles.engagmentHeading}>
      <h1>Our Business Engagement Approach</h1>
      <p>At Brandsmashers, we offer flexible and client-centric business engagement models that ensure efficiency and high-quality results. Whether you're looking to augment your team with skilled professionals or need a dedicated team to build and manage your software solutions, we have the right approach for you. </p>
      <div className={styles.engagementStats}>
        <div className={styles.stat}>
          <h2>End-to-End Services</h2>
          <p>We provide full software development services, including planning, design, development, testing, and maintenance, ensuring that your project is completed to the highest standard.</p>
        </div>
        <div className={styles.stat}>
        <h2>Team Augmentation</h2>
          <p> Access a pool of highly experienced developers and IT professionals to fill immediate skill gaps, boost your team&apos;s capabilities, and accelerate project timelines.</p>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
