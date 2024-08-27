// import React from "react";
// import styles from "../../src/styles/Hero/FaqSection.module.css"

// const FaqSection = () => {
//     return (<>
//      <div className={styles.container}>fvgjkjk</div>
//      </>
//     );
//   };
  
//   export default FaqSection ;

import { useState } from 'react';
import styles from '../../src/styles/Hero/FaqSection.module.css';

const faqData = [
  { id: 1, question: 'What is your return policy?',
   answer: 'Our return policy allows returns within 30 days of purchase. Items must be in their original condition.' },
  { id: 2, question: 'How can I track my order?', 
    answer: 'You can track your order using the tracking number provided in your order confirmation email.' },
  { id: 3, question: 'Do you ship internationally?', 
    answer: 'Yes, we ship internationally. Shipping rates and times vary based on the destination.' },
  { id: 4, question: 'What payment methods are accepted?',
    answer: 'We accept major credit cards, PayPal, and other secure payment methods.' }
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
        <h1 className={styles.mainHeading}>FAQS</h1>
      <div className={styles.faqLeft}>
        <ul className={styles.faqQuestions}>
          {faqData.map(({ id, question }) => (
            <li
              key={id}
              className={styles.faqQuestion}
              onClick={() => toggleAnswer(id)}
            >
              {question}
            </li>
          ))}
        </ul>
      </div>

      {/* right section */}
      <div className={styles.faqRight}>
      <h1 className={styles.heading}>Find Interview-ready candidates in <span>24 hours</span></h1>
      <div>
        <button >Book A meeting</button>
        <button> Call Now</button>
      </div>
      </div>
    </div>
  );
}
