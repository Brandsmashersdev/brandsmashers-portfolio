import React, { useState } from "react";
import style from "@/styles/HireDevelopers/FAQ.module.css";

const FAQData = [
  {
    id: 1,
    question:
      "What makes Brandsmashers the best web development company in Bhopal?",
    answer:
      "At Brandsmashers, we bring over a decade of experience in such technologies as Next.js, and React.js to offer beautiful and easy to navigate websites. It is not just conventional web design skills that are of value here: We create sophisticated and high-speed applications and interfaces. Being an established web development company in Bhopal, every project that we develop is unique and in line with your business requirements",
  },
  {
    id: 2,
    question:
      "Why choose Brandsmashers for Custom Mobile App Development Services in Bhopal? ",
    answer:
      "Our Custom Mobile App Development Services in Bhopal are aimed at providing user-centric, immersive mobile solutions. Here at Brandsmashers, the focus is on first understanding the end-user and their needs and then using technologies to build effective apps. For a basic application or a complex solution with numerous features, our primary aim is to enhance your business and achieve your goals.",
  },
  {
    id: 3,
    question:
      " What technologies does Brandsmashers use for desktop app development?",
    answer:
      "As an organisation with cutting-edge technological tools and applications, Brandsmashers develops powerful applications that can run on the desktop for easy use by the users. Our company has become the Best Desktop App Development Services in Bhopal, and we guarantee that all the apps function as efficiently as possible. Starting from cross-platform solutions to business tools, all of our products are aimed at maximizing output and minimizing the interface complexity.",
  },
  {
    id: 4,
    question:
      "How do Brandsmashers Best UI/UX Design Services in Bhopal benefit my business?",
    answer:
      "In our UI/UX Design Services in Bhopal, we want to develop easy to navigate, attractive interfaces that enhance satisfaction. Brandsmashers is all about creating experiences looking appealing as much as they are practical. Knowing your users’ need and usage patterns, we make sure each interaction is designed for the best usability and your brand’s value is enhanced.",
  },
  {
    id: 5,
    question:
      "How can Brandsmashers help with AI and ML solutions for my business?",
    answer:
      "Brandsmashers has expertise in deep AI and ML that help in generating insights and implement new changes. Our team is focused on developing and implementing machine learning solutions to enhance the services productivity, determine tendencies, and manage resources. For significant results, enhanced growth, and the ability to outcompete market competitors, opt for Brandsmashers to harness the power of first-class AI and ML in your business.",
  },
];

export default function Faq() {
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
              Let&apos;s talk
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
