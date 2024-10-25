import React from "react";
import industriesData from "../../data/Industries";
import styles from "@/styles/Technologies/Industries.module.css";

// Dynamically load the icons
const Industries = () => {
  return (
    <section className={styles.industriesSection} id="industry">
      <h2 className={styles.heading}>Industries We Serve</h2>
      <p className={styles.subHeading}>
        At Brandsmashers the most professional software development company and
        digital marketing agency in Bhopal we offer tailored IT solutions that
        empower companies in various fields. We provide coverage across more
        than 20 domains; providing best-of-breed scalable and innovative
        technology services cutting across the various industry domains as
        requested. Explore how we empower businesses in the
        following industries:
      </p>
      <div className={styles.industriesGrid}>
        {industriesData.map((industry, index) => (
          <div
            key={index}
            className={styles.industryCard}
            style={{ backgroundColor: industry.color }}
          >
            <div className={styles.iconWrapper}>
              {React.createElement(industry.icon)}
            </div>
            <h3 className={styles.industryTitle}>{industry.title}</h3>
            <p className={styles.industryDescription}>{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
