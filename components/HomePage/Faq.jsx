// components/Faq.js

import React, { useState } from 'react';
import styles from '../../src/styles/Hero/Faq.module.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What Makes Hidden Brains Unique in Enterprise Software Development?",
      answer: "Hidden Brains is unique because of its innovative approach, expert team, and custom solutions tailored to each client's needs.",
    },
    {
      question: "How Hidden Brains Add Strategic Value to Our Enterprise?",
      answer: "We add strategic value by aligning technology solutions with your business goals, enhancing efficiency, and driving growth.",
    },
    {
      question: "How Does Hidden Brains Handle Project Deadlines?",
      answer: "We use agile methodologies, clear communication, and constant monitoring to ensure projects are delivered on time.",
    },
    {
      question: "How Does Hidden Brains Stay Ahead with the Latest Technology Trends?",
      answer: "Our team is dedicated to continuous learning and innovation, staying updated with the latest trends and technologies.",
    },
    {
      question: "What Is Your Process for Quality Assurance and Testing?",
      answer: "Our process involves rigorous testing at each development phase to ensure the highest quality and performance standards.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.leftSection}>
        <h2>Frequently Asked Questions (FAQ’s)</h2>
        <p>
          Here are some frequently asked questions about our software product
          development services, answered to help you understand our process and capabilities better.
        </p>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className={styles.faqToggle}>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
