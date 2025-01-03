import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../../src/styles/HireDevelopers/VettingProcess.module.css';

const VettingProcess = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLeftVisible(true);
        }
      });
    }, observerOptions);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsRightVisible(true);
        }
      });
    }, observerOptions);

    const leftRef = leftContentRef.current;
    const rightRef = rightContentRef.current;

    if (leftRef) {
      leftObserver.observe(leftRef);
    }
    if (rightRef) {
      rightObserver.observe(rightRef);
    }

    return () => {
      if (leftRef) {
        leftObserver.unobserve(leftRef);
      }
      if (rightRef) {
        rightObserver.unobserve(rightRef);
      }
    };
  }, []);

  return (
    <>
      <div>
        <div className={styles.heading}>
          <h1>
            <span>Brandsmashers</span> Vetting Process
          </h1>
        </div>

        <div className={styles.VettingContent}>
          <div
            ref={leftContentRef}
            className={`${styles.leftContent} ${isLeftVisible ? styles.animateLeft : ''}`}
          >
            <p>
              We carefully screen resumes and portfolios to ensure relevant
              experience and skills match the job requirements.
            </p>
            <p>
              Candidates complete tailored assessments to evaluate their
              technical proficiency and problem-solving abilities.
            </p>
          </div>
          <div className={styles.VettingProcessContainer}>
            <div className={styles.imagesContainer}>
              {Array.from({ length: 10 }, (_, index) => (
                <Image
                  key={index}
                  src={`/VettingProcess/person${index % 2 + 2}.jpg`}
                  alt='Images'
                  width={20}
                  height={20}
                  className={`${styles.funnelImage} ${styles[`image${index + 1}`]}`}
                />
              ))}
            </div>
            <div>
              {Array.from({ length: 4 }, (_, index) => (
                <React.Fragment key={index}>
                  <Image
                    src={`/VettingProcess/epi${index + 1}.png`}
                    alt='Images'
                    width={300}
                    height={80}
                    className={`${styles.ellipse} ${styles[`ellipse${index + 1}`]}`}
                  />
                  <Image
                    src={`/VettingProcess/fun${index + 1}.png`}
                    alt='Images'
                    width={300}
                    height={100}
                    className={`${styles.funnel} ${styles[`funnel${index + 1}`]}`}
                    style={{ zIndex: '10' }}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            ref={rightContentRef}
            className={`${styles.rightContent} ${isRightVisible ? styles.animateRight : ''}`}
          >
            <p>
              Senior developers conduct detailed interviews to assess candidates&apos;
              practical knowledge and coding expertise.
            </p>
            <p>
              Experienced developers review the overall performance to ensure a
              strong fit for the role.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VettingProcess;