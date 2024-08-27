// import React, { useState } from 'react';
// import styles from '../../src/styles/Hero/FaqSection.module.css';
// import { FaRegCalendarCheck } from "react-icons/fa";
// import { LuPhoneCall } from "react-icons/lu";

// const faqData = [
//   { id: 1, question: 'What is your return policy?', answer: 'Our return policy allows returns within 30 days of purchase. Items must be in their original condition.' },
//   { id: 2, question: 'How can I track my order?', answer: 'You can track your order using the tracking number provided in your order confirmation email.' },
//   { id: 3, question: 'Do you ship internationally?', answer: 'Yes, we ship internationally. Shipping rates and times vary based on the destination.' },
//   { id: 4, question: 'What payment methods are accepted?', answer: 'We accept major credit cards, PayPal, and other secure payment methods.' },
//   { id: 5, question: 'What is your return policy?', answer: 'Our return policy allows returns within 30 days of purchase. Items must be in their original condition.' },
//   { id: 6, question: 'How can I track my order?', answer: 'You can track your order using the tracking number provided in your order confirmation email.' },
//   { id: 7, question: 'Do you ship internationally?', answer: 'Yes, we ship internationally. Shipping rates and times vary based on the destination.' },
//   { id: 8, question: 'What payment methods are accepted?', answer: 'We accept major credit cards, PayPal, and other secure payment methods.' }
// ];

// export default function FaqSection() {
//   const [activeId, setActiveId] = useState(null);

//   const toggleAnswer = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <div className={styles.faqContainer}>
//       <h1 className={styles.mainHeading}>FAQ'S</h1>
//       <div className={styles.faqContent}>
//         <div className={styles.faqLeft}>
//           <ul className={styles.faqQuestions}>
//             {faqData.map(({ id, question, answer }) => (
//               <li key={id} className={styles.faqItem}>
//                 <div className={styles.faqQuestion} onClick={() => toggleAnswer(id)}>
//                   {question}
//                 </div>
//                 {activeId === id && (
//                   <div className={styles.faqAnswer}>
//                     {answer}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right section */}
//         <div className={styles.faqRight}>
//           <h2 className={styles.heading}>Find Interview-ready candidates in <span>24 hours</span></h2>
//           <div className={styles.actionButtons}>
//             <button className={styles.meetingButton}> 
//                 <FaRegCalendarCheck /> <span className={styles.spanButton}>Book A Meeting </span> Connect with experts </button>
//             <button className={styles.callButton}>
//                  <LuPhoneCall /> <span className={styles.spanButton}>Call Now </span> +(123)344577388</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import styles from '../../src/styles/Hero/FaqSection.module.css';
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

const faqData = [
  { id: 1, question: 'What is your return policy?', answer: 'Our return policy allows returns within 30 days of purchase. Items must be in their original condition.' },
  { id: 2, question: 'How can I track my order?', answer: 'You can track your order using the tracking number provided in your order confirmation email.' },
  { id: 3, question: 'Do you ship internationally?', answer: 'Yes, we ship internationally. Shipping rates and times vary based on the destination.' },
  { id: 4, question: 'What payment methods are accepted?', answer: 'We accept major credit cards, PayPal, and other secure payment methods.' },
  { id: 5, question: 'What is your return policy?', answer: 'Our return policy allows returns within 30 days of purchase. Items must be in their original condition.' },
  { id: 6, question: 'How can I track my order?', answer: 'You can track your order using the tracking number provided in your order confirmation email.' },
  { id: 7, question: 'Do you ship internationally?', answer: 'Yes, we ship internationally. Shipping rates and times vary based on the destination.' },
  { id: 8, question: 'What payment methods are accepted?', answer: 'We accept major credit cards, PayPal, and other secure payment methods.' }
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.mainHeading}>FAQ'S</h1>
      <div className={styles.faqContent}>
        <div className={styles.faqLeft}>
          <ul className={styles.faqQuestions}>
            {faqData.map(({ id, question, answer }) => (
              <li key={id} className={styles.faqItem} onClick={() => toggleAnswer(id)}>
                <div className={styles.faqQuestion}>{question}</div>
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
        {/* <div className={styles.faqRight}>
          <h2 className={styles.heading}>Find Interview-ready<br></br>
           candidates in <span className={styles.spanButton}>24 hours</span></h2>
          <div className={styles.actionButtons}>
            <button className={styles.meetingButton}>
                <FaRegCalendarCheck /> <span className={styles.spanButton}>Book A Meeting</span>
            </button>
            <button className={styles.callButton}>
                <LuPhoneCall /> <span className={styles.spanButton}>Call Now</span>
            </button>
          </div>
        </div> */}

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

