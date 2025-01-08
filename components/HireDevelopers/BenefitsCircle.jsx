import React, { useState, useEffect } from "react";
import styles from "../../src/styles/HireDevelopers/BenefitsCircle.module.css";
// import { Moda } from "@mui/material";
import Image from "next/image";
const BenefitsCircle = () => {
  const benefits = [
    {
      icon: "VettingProcess/excellent-quality-work.svg",
      label: "Excellent Quality Work",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/tools-technologies.svg",
      label: "Equipped with the Latest Tools and Technologies",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/full-commitment.svg",
      label: "Full Commitment",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/language-barriers.svg",
      label: "No Language Barriers",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/infrastructure.svg",
      label: "No Need of Infrastructure",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/control-team.svg",
      label: "100% Control Over the Team",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/d-time.svg",
      label: "Project Delivery On Time",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/security.svg",
      label: "Data Security and Confidentiality",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/productivity.svg",
      label: "Enhanced Productivity",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
    {
      icon: "VettingProcess/multiple-options-choose-from.svg",
      label: "Scalability and Flexibility",
      description:
        "We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.",
    },
  ];

  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 768) {
        setSelectedBenefit(null); // Reset when window is resized below 768px
      }
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleBenefitClick = (index) => {
    if (window.innerWidth > 768) {
      setSelectedBenefit(index);
    }
  };
  const closeDetails = () => {
    setSelectedBenefit(null);
  };

  return (
    <div
      style={{ height: "100%", overflow: "hidden" }}
      className={styles.firstDiv}
    >
      <h1 className={styles.heading}>
        {" "}
        <span className={styles.myspan}>Brandsmashers</span> Vetting Process
      </h1>
      <div className={styles.circleContainer}>
        <div
          className={`${styles.circleContainer1} ${
            selectedBenefit !== null ? styles.shrunkCircle : ""
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
                selectedBenefit === index ? styles.highlighted : ""
              }`}
              onClick={() => setSelectedBenefit(index)}
            >
              <div className={styles.trapezium}>
                <div className={styles.iconCircle}>
                  {/* <span className={styles.icon}>{benefit.icon}</span> */}
                  <Image
                    src={`/${benefit.icon}`}
                    alt={benefit.label}
                    width={50}
                    height={50}
                    className={styles.icon}
                  />
                </div>
              </div>
              <spa className={styles.benefitLabel}>{benefit.label}</spa> {/* Add this */}

            </div>
          ))}
        </div>

        {selectedBenefit !== null && (
          <div
            className={`${styles.detailsSidebar} ${
              selectedBenefit !== null ? styles.showSidebar : ""
            }`}
          >
            <div className={styles.detailsSidebarContent}>
              <button className={styles.closeButton} onClick={closeDetails}>
                ✖
              </button>
              <div className={styles.benefitDetails}>
                <h3>{benefits[selectedBenefit].label}</h3>
                <p>{benefits[selectedBenefit].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default BenefitsCircle;
