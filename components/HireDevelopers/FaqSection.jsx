// import React, { useState } from 'react';
// import styles from '../../src/styles/Hero/FaqSection.module.css';
// import { FaRegCalendarCheck } from "react-icons/fa";
// import { LuPhoneCall } from "react-icons/lu";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
// import faqData from '../../data/Faq';

// export default function FaqSection() {
//   const [activeId, setActiveId] = useState(null);

//   const toggleAnswer = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <div className={styles.faqContainer}>
//       <h1 className={styles.mainHeading}>FAQ&apos;S</h1>
//       <div className={styles.faqContent}>
//         <div className={styles.faqLeft}>
//           <ul className={styles.faqQuestions}>
//             {faqData.map(({ id, question, answer }) => (
//               <li key={id} className={styles.faqItem} onClick={() => toggleAnswer(id)}>
//                 <div className={styles.faqQuestion}>
//                   {question}
//                   <span className={styles.arrowIcon}>
//                     {activeId === id ? <FaChevronUp /> : <FaChevronDown />}
//                   </span>
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

//         <div className={styles.faqRight}>
//           <h2 className={styles.heading}>
//             Find Interview-ready<br />
//             candidates in <span className={styles.highlight}>24 hours</span>
//           </h2>
//           <div className={styles.actionButtons}>
//             <button className={styles.meetingButton}>
//               <FaRegCalendarCheck /> Book A Meeting
//             </button>
//             <button className={styles.callButton}>
//               <LuPhoneCall /> Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import style from "@/styles/HireDevelopers/FAQ.module.css";

const FAQData = [
  {
    id: 1,
    question: "How are Brandsmashers different from other hiring platforms?",
    answer:
      "That is where Brandsmashers shine by providing a swift and easy way to find talented developers for hire who are perfect for your needs in terms of qualifications as well as personality. Whenever you are in the search of remote developers from India, or any other requirement of providing your company with IT staff augmentation services, we guarantee that our individual and approach, as well as strong background in the IT field will help you to meet the best talent in the most efficient and effective manner. ",
  },
  {
    id: 2,
    question:
      "What is the company&apos;s approach when recruiting a developer for the firm that is Brandsmashers? ",
    answer:
      "Our procedure comprises resume and portfolio screening, skill tests, behavioural and technical interviews, and finally, senior developer interviews. Be it remote developers in India or IT staff augmentation services, we offer you the best candidates available who are willing to begin immediately thus making the hiring process an incredibly easy one.",
  },
  {
    id: 3,
    question:
      "How do you ensure the security and integrity of the work that Brandsmashers developers do?",
    answer:
      "We maintain high security standards by conducting background checks, ensuring compliance with data protection regulations, and implementing rigorous project management practices. This safeguards your information while delivering high-quality results, whether you&apos;re working with remote developers or our in-house team.",
  },
  {
    id: 4,
    question:
      "How are Brandsmashers different from other hiring&nbsp;platforms?",
    answer:
      "That is where Brandsmashers shine by providing a swift and easy way to find talented developers for hire who are perfect for your needs in terms of qualifications as well as personality. Whenever you are in the search of remote developers from India, or any other requirement of providing your company with IT staff augmentation services, we guarantee that our individual and approach, as well as strong background in the IT field will help you to meet the best talent in the most efficient and effective&nbsp;manner.",
  },
  {
    id: 5,
    question:
      "What if I&apos;m not satisfied with a Brandsmashers&nbsp;developer?",
    answer:
      "We offer a satisfaction guarantee. If you are not satisfied with a developer, then we will do the best to solve your problem as soon as possible or offer you the coincidence in the choice closer to you. This guarantees that you obtain the most suitable candidate to work on your project especially if you decide to outsource your developers&nbsp;from&nbsp;India.",
  },
  {
    id: 6,
    question:
      "How rigorous your screening process can guarantee that the candidates I need will&nbsp;be&nbsp;selected?",
    answer:
      "These are resume screening, aptitude tests, technical interviews including senior developers. It means that all the candidates supplied for both steady positions or Workers for staff augmentation form the United States will only be competent in your field&nbsp;of&nbsp;choice.",
  },
  {
    id: 7,
    question:
      "Is it possible to hire software engineers through Brandsmashers&nbsp;within&nbsp;a&nbsp;week?",
    answer:
      "Yes, we do provide a fast hiring process that will enable select qualified software engineers for you within one week depending on your choice and availability of the candidates. They prove particularly helpful if you want to hire remote developers from India&nbsp;in&nbsp;a&nbsp;hurry.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={style.faqContainer}>
      <div className={style.faqContent}>
        <div className={style.faqHeader}>
          <h2>Frequently Asked Questions</h2>
          <div className={style.faqContact}>
            <p>Still have questions?</p>
            <a href="#" className={style.faqLink}>
              Let&nbsp;s talk
              <svg
                viewBox="0 0 24 24"
                className={style.arrowIcon}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className={style.faqQuestions}>
          {FAQData.map((faq) => (
            <div
              key={faq.id}
              className={`${style.faqItem} ${
                activeId === faq.id ? style.active : ""
              }`}
            >
              <button
                className={style.faqQuestion}
                onClick={() => toggleQuestion(faq.id)}
              >
                {faq.question}
                <span className={style.faqIcon}></span>
              </button>
              <div className={style.faqAnswer}>
                <div className={style.faqAnswerContent}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}