// components/Faq.js

import React, { useState } from 'react';
import styles from '../../src/styles/Hero/Faq.module.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Brandsmashers Tech offer?",
      answer: "We provide a range of services, including software product development, mobile app development, full-stack development, UI/UX design, and staff augmentation. Our team of expert developers can handle various technologies like iOS, Android, AWS, Blockchain, and more.",
    },
    {
      question: "How does Brandsmashers Tech ensure the quality of its developers?",
      answer: "All our developers go through a rigorous screening process. We only hire the top 1.2% of senior developers, ensuring that clients receive highly skilled professionals with proven track records of delivering successful projects.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide variety of industries, including e-commerce, healthcare, fintech, gaming, and more. Our team tailors solutions to meet the specific needs of each industry.",
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines depend on the scope and complexity of the work. However, we are committed to meeting deadlines and provide timely updates throughout the development process to ensure on-time delivery.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide ongoing support and maintenance after the product launch to ensure smooth operation and to implement any necessary updates or improvements.",
    },
    {
      question: "Can Brandsmashers Tech scale a team for a large project?",
      answer: "Absolutely! We offer flexible staff augmentation services, allowing you to scale your development team quickly and efficiently based on your project&apos;s needs.",
    },
    {
      question: "What technologies do your developers specialise in?",
      answer: "Our developers are proficient in a wide range of technologies, including but not limited to JavaScript frameworks (Next.js, React.js), AWS, Salesforce, Blockchain, Android, iOS, and more.",
    },
    {
      question: "Do you offer a trial period for your services?",
      answer: "Yes, we offer a two-week trial period for our development services, allowing you to assess our capabilities before committing long-term.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.leftSection}>
        <h2>Frequently Asked Questions (FAQ&apos;s)</h2>
        <p>
        Explore Our Frequently Asked Questions About Software Product Development Services. Get Insights into Our Process and Capabilities.
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
