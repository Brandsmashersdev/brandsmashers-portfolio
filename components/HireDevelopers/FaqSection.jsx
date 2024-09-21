import React, { useState } from 'react';
import styles from '../../src/styles/Hero/FaqSection.module.css';
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import faqData from '../../data/Faq';

export default function FaqSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.mainHeading}>FAQ&apos;S</h1>
      <div className={styles.faqContent}>
        <div className={styles.faqLeft}>
          <ul className={styles.faqQuestions}>
            {faqData.map(({ id, question, answer }) => (
              <li key={id} className={styles.faqItem} onClick={() => toggleAnswer(id)}>
                <div className={styles.faqQuestion}>
                  {question}
                  <span className={styles.arrowIcon}>
                    {activeId === id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {activeId === id && (
                  <div className={styles.faqAnswer}>
                    {answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className={styles.faqRight}>
          <h2 className={styles.heading}>
            Find Interview-ready<br />
            candidates in <span className={styles.highlight}>24 hours</span>
          </h2>
          <div className={styles.actionButtons}>
            <button className={styles.meetingButton}>
              <FaRegCalendarCheck /> Book A Meeting
            </button>
            <button className={styles.callButton}>
              <LuPhoneCall /> Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
