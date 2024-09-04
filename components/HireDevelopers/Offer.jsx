import React, { useState } from 'react';
import styles from '@/styles/HireDevelopers/Offer.module.css'; // Assuming you are using CSS Modules for styling
import { FaFileContract, FaUserCheck, FaDollarSign } from 'react-icons/fa';
const Offer = () => {
  const [activeTab, setActiveTab] = useState('engagement');

  const renderContent = () => {
    switch (activeTab) {
      case 'location':
        return (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
            <FaFileContract className={styles.icon} />
              <h3>Worldwide Talent Pool</h3>
              <p>Access a diverse selection of skilled developers from various regions around the world.</p>
            </div>
            <div className={styles.card}>
            <FaUserCheck className={styles.icon} />
              <h3>Local Expertise, Global Reach</h3>
              <p>Combine our local market knowledge with a global talent network to find the best fit.</p>
            </div>
            <div className={styles.card}>
            <FaDollarSign className={styles.icon} />
              <h3>Time-Zone Flexibility</h3>
              <p>Work with developers in different time zones to align with your project&apos;s schedule.</p>
            </div>
          </div>
        );
      case 'hiringStage':
        return (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
            <FaFileContract className={styles.icon} />
              <h3>End-to-End Recruitment Management</h3>
              <p>We manage the entire hiring process, from initial outreach to final onboarding.</p>
            </div>
            <div className={styles.card}>
            <FaUserCheck className={styles.icon} />
              <h3>Customized Hiring Stages</h3>
              <p>Tailor each phase of recruitment to meet your specific hiring needs and preferences.</p>
            </div>
            <div className={styles.card}>
            <FaDollarSign className={styles.icon} />
              <h3>Efficient Onboarding</h3>
              <p>Our streamlined onboarding process ensures new hires integrate smoothly and quickly.</p>
            </div>
          </div>
        );
      case 'engagement':
      default:
        return (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
            <FaFileContract className={styles.icon} />
              <h3>Targeted Talent Acquisition</h3>
              <p>Find candidates who fit both your skills and company culture.</p>
            </div>
            <div className={styles.card}>
            <FaUserCheck className={styles.icon} />
              <h3>Streamlined Screening Process</h3>
              <p>Receive only top-quality profiles, saving you time.</p>
            </div>
            <div className={styles.card}>
            <FaDollarSign className={styles.icon} />
              <h3>Expert Matchmaking</h3>
              <p>Get developers matched to your specific project needs.</p>
            </div>
          </div>
        );
    }
  };

  // const headingUnderlineWidth = {
  //   engagement: '150px',
  //   location: '190px',
  //   hiringStage: '170px',
  // };

  // const headingUnderlineTransform = {
  //   engagement: '0',
  //   location: '150px',
  //   hiringStage: '340px',
  // };

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <div className={styles.offerbtn}>What we offer?</div>
        <h2 className={styles.heading}>
          Your Expert in <span className={styles.highlight}>Tech Recruitment</span>
        </h2>
        {/* <div
          className={styles.headingUnderline}
          style={{
            width: headingUnderlineWidth[activeTab],
            transform: `translateX(${headingUnderlineTransform[activeTab]})`,
          }}
        /> */}
      </div>
      <p className={styles.subtitle}>
        Let Brandsmashers handle the entire hiring process. We guarantee you find and <br/> onboard the ideal software developers tailored to your business needs.
      </p>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'engagement' ? styles.active : ''}`}
          onClick={() => setActiveTab('engagement')}
        >
          Engage with Precision
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'location' ? styles.active : ''}`}
          onClick={() => setActiveTab('location')}
        >
          Global Talent Access
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'hiringStage' ? styles.active : ''}`}
          onClick={() => setActiveTab('hiringStage')}
        >
          Seamless Hiring Journey
        </button>
      </div>
      {/* <div className={styles.underline} style={{ width: headingUnderlineWidth[activeTab], // Adjust underline width based on active tab
    transform: `translateX(${headingUnderlineTransform[activeTab]})` }} /> */}
      {renderContent()}
    </div>
  );
};

export default Offer;