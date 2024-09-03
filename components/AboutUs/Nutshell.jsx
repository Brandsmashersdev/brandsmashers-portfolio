import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import styles from '@/styles/AboutUs/Nutshell.module.css';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { value: 2001, label: "Year of Foundation" },
    { value: 810, suffix: "+", label: "Global Customers" },
    { value: 1080, suffix: "+", label: "IT Professionals" },
    { value: 36, label: "Countries with active customers" },
    { value: 1800, suffix: "+", label: "Completed Projects" },
    { value: 5, label: "Offices" },
    { value: 90, suffix: "%", label: "Customer Retention" },
    { value: 22, suffix: "+", label: "Industries Served" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.3 // Adjust this threshold according to your needs
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutUs}>
      <h2 className={styles.title}>In a Nutshell</h2>
      <div className={styles.metricsContainer}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricBox}>
            <h3 className={styles.metricValue}>
              {isVisible && (
              <CountUp 
                start={0} 
                end={metric.value} 
                duration={4.5} 
                suffix={metric.suffix ? metric.suffix : ""} 
                                
              />
              )}              
            </h3>
            <p className={styles.metricLabel}>{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
