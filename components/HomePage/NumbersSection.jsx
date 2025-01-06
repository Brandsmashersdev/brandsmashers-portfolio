import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import styles from "../../src/styles/Hero/NumberSection.module.css";
import { useRouter } from "next/router";

const NumbersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Define your statistics as an array of objects
  const stats = [
    { value: 6, suffix: "+", label: "Years of Expertise" },
    { value: 95, suffix: "+", label: "Timely Deliveries" },
    { value: 20, suffix: "+", label: "Markets Worldwide" },
    { value: 50, suffix: "+", label: "Global Brands" },
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

    const currentRef = sectionRef.current; // Copy ref to a stable variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/contactus#contact-us`);
  };

  return (
    <section ref={sectionRef} className={styles.numbersSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h3 className={styles.subtitle}>Solution Matrix</h3>
          <h2 className={styles.title}>Proof is in the Numbers</h2>
          <p className={styles.description}>
            A Reliable Tech Partner Driving Growth and Preparing You for the
            Future with Innovative Solutions.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => handleCardClick()}
            style={{ cursor: "pointer" }}
          >
            Get Started
          </button>
        </div>
        <div className={styles.rightContent}>
          {/* Stat 1 */}
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
