import React, {useState} from 'react';
import styles from '../../src/styles/HireDevelopers/BenefitsCircle.module.css';
import { Moda } from "@mui/material";
const BenefitsCircle = () => {
    const benefits = [
        { icon: "💎", label: "Excellent Quality Work",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
        { icon: "🛠️", label: "Equipped with the Latest Tools and Technologies",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
        { icon: "🤝", label: "Full Commitment",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
        { icon: "🌐", label: "No Language Barriers" ,description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission."},
        { icon: "🏢", label: "No Need of Infrastructure",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
        { icon: "👥", label: "100% Control Over the Team" ,description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission."},
        { icon: "⏱️", label: "Project Delivery On Time",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
        { icon: "🔒", label: "Data Security and Confidentiality" ,description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission."},
        { icon: "📈", label: "Scalability and Flexibility",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
        { icon: "📊", label: "Enhanced Productivity",description: "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission." },
      ];
      
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const closeDetails = () => {
    setSelectedBenefit(null); 
  };

  return (
    <div style={{height: "100vh", overflow:'auto'}}>
    <div className={styles.circleContainer}>
      < div className={`${styles.circleContainer1} ${
          selectedBenefit !== null ? styles.shrunkCircle : ''
        }`}
      >
      <div className={styles.redCircle}></div>
      <div className={styles.centerCircle}>
        <h2>Benefits</h2>
      </div>

      {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`${styles.benefitItem} ${styles[`item${index}`]} ${
              selectedBenefit === index ? styles.highlighted : ''
            }`}
            onClick={() => setSelectedBenefit(index)}
          >
            <div className={styles.trapezium}>
              <div className={styles.iconCircle}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
            </div>
          </div>
        ))} 
        </div>

      <div
        className={`${styles.detailsSidebar} ${
          selectedBenefit !== null ? styles.showSidebar : ''
        }`}
        >
       {selectedBenefit !== null && (
        <div className={styles.detailsSidebarContent}>
        <div>
          <button className={styles.closeButton} onClick={closeDetails}>DDH
    </button>

    </div>
    <div className={styles.benefitDetails}>
      
      <h3>{benefits[selectedBenefit].label}</h3>
      <p>{benefits[selectedBenefit].description}</p>
    </div>
  </div>
  )}
      </div>
    </div>
    </div>
  );
};

export default BenefitsCircle;

