import React from 'react';

import styles from '@/styles/HireDevelopers/HiringSteps.module.css';
// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, 
  faStar, 
  faCommentDots,
  faCircleCheck 
} from '@fortawesome/free-solid-svg-icons';


const HiringSteps = () => {
  const steps = [
    {
      icon: faUserTie,
      title: " Tell Us Your Requirements",
      description: "Get matched with top-tier, pre-vetted talent in under 24 hours."
    },
    {
      icon: faStar,
      title: "Meet Our Best talents ",
      description: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours."
    },
    {
      icon: faCommentDots,
      title: "Simplify your interview process",
      description: "Select the candidate that fits your requirements, and we'll schedule the interview."
    },
    {
      icon: faCircleCheck,
      title: " Hire The Right Candidate",
      description: "Once you've selected a candidate, we'll manage the entire onboarding for you."
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hire Remote  Developers in 4 Steps</h1>
      
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={styles.step}>
              <div className={styles.iconCircle}>
                <FontAwesomeIcon 
                  icon={step.icon} 
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={styles.arrow}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      <button className={styles.ctaButton}>
        Ready to hire?
      </button>
    </div>
  );
};

export default HiringSteps;