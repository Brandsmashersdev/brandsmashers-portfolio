import React, { useState } from 'react';
import styles from '../../src/styles/Offer.module.css'; // Assuming you are using CSS Modules for styling

const Offer = () => {
  const [activeTab, setActiveTab] = useState('engagement');

  const renderContent = () => {
    switch (activeTab) {
      case 'location':
        return (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>Location Card 1</div>
            <div className={styles.card}>Location Card 2</div>
          </div>
        );
      case 'hiringStage':
        return (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>Hiring Stage Card 1</div>
            <div className={styles.card}>Hiring Stage Card 2</div>
          </div>
        );
      case 'engagement':
      default:
        return (
          <div className={styles.cardsContainer}>
            <div className={styles.card}>Contract</div>
            <div className={styles.card}>C2H Model</div>
            <div className={styles.card}>Permanent</div>
          </div>
        );
    }
  };

  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>Your Expert in <span className={styles.highlight}>Tech Recruitment</span></h2>
      <p className={styles.subtitle}>
      Let Brandsmashers handle the entire hiring process. We guarantee you find and onboard the ideal software developers tailored to your business needs.
      </p>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'engagement' ? styles.active : ''}`}
          onClick={() => setActiveTab('engagement')}
        >
          By Engagement
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'location' ? styles.active : ''}`}
          onClick={() => setActiveTab('location')}
        >
          By Location
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'hiringStage' ? styles.active : ''}`}
          onClick={() => setActiveTab('hiringStage')}
        >
          By Hiring Stage
        </button>
      </div>
      <div className={styles.underline} style={{ transform: `translateX(${activeTab === 'location' ? '100%' : activeTab === 'hiringStage' ? '200%' : '0'})` }} />
      {renderContent()}
    </div>
  );
};

export default Offer;
