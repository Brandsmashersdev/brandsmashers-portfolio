import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import styles from '../../src/styles/Hero/NumberSection.module.css';

const NumbersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Define your statistics as an array of objects
  const stats = [
    { value: 22, suffix: "+", label: "Years of Expertise" },
    { value: 95, suffix: "%", label: "Timely Deliveries" },
    { value: 30, suffix: "+", label: "Markets Worldwide" },
    { value: 100, suffix: "+", label: "Global Brands" }
  ];

  // Intersection Observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 } // Adjust threshold as per requirement
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
    <section ref={sectionRef} className={styles.numbersSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h3 className={styles.subtitle}>Solution Matrix</h3>
          <h2 className={styles.title}>Proof is in the Numbers</h2>
          <p className={styles.description}>
            A trusted tech partner for accelerating growth & future-readiness using next-gen services and solutions.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
        <div className={styles.rightContent}>
          {/* Stat 1 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={22} duration={9} suffix="+" />
            </h3>
            <p className={styles.statText}>Years of Expertise</p>
          </div>

          {/* Stat 2 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={95} duration={9} suffix="%" />
            </h3>
            <p className={styles.statText}>Timely Deliveries</p>
          </div>

          {/* Stat 3 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={30} duration={9} suffix="+" />
            </h3>
            <p className={styles.statText}>Markets Worldwide</p>
          </div>

          {/* Stat 4 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={100} duration={9} suffix="+" />
            </h3>
            <p className={styles.statText}>Global Brands</p>
          </div>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <h3 className={styles.statNumber}>
                {isVisible && (
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={4.5} 
                    suffix={stat.suffix ? stat.suffix : ""} 
                  />
                )}
              </h3>
              <p className={styles.statText}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
