import React from 'react';
import styles from '@/styles/AboutUs/Engagement.module.css';

const Engagement = () => {
  return (
    <div className={styles.engagmentHeading}>
      <h1>Our Business Engagement Approach</h1>
      <p>We help businesses to increase their revenue by leveraging our domain expertise and reliable software development services. Our flexible business models enable our customers across multiple industry verticals to choose as per their need and be effective in their business. </p>
      <div className={styles.engagementStats}>
        <div className={styles.stat}>
          <h2>Fixed Cost</h2>
          <p>Our Fixed scope implementation includes precision of estimates and customized solutions as per the requirements. You can leverage our cross-domain expertise in defining the projects from the scratch and have a clearly defined budget for your initiatives. Based on your custom needs, our expert team provides a fixed cost proposal and the project is accomplished in milestones</p>
        </div>
        <div className={styles.stat}>
        <h2>Team Augmentation</h2>
          <p>To manage the timely achievement of your goals, utilize our on- demand skills and resources. Our expert IT team specializing in various technologies can seamlessly work as your team to meet the business objectives with short and long term engagements, cost effectively. With our proven, reliable and professional acumen, you can scale-up your projects conveniently to gain a competitive advantage</p>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
