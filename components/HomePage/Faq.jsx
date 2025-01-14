// components/Faq.js

import React, { useState } from "react";
import style from "../../src/styles/Hero/Faq.module.css";

const Faq = () => {
  const FAQData = [
    {
      id: 1,
      question: "What services does Brandsmashers Tech offer?",
      answer:
        "Brand Smashers Tech is an innovative software development company, that can offer a full range of IT services, such as custom software development, web and mobile application development, UI/UX design, e-commerce Website development, SEO and advertising. The services also include staff augmentation here we provide businesses with experienced remote developers for hire. No matter whether you require development of custom software solution or custom digital marketing solution for your business, you can be assured to get professional solutions from us with adequate technical competence for designing the perfect solution for your business.",
    },
    {
      id: 2,
      question:
        " How does Brandsmashers Tech ensure the quality of its developers? ",
      answer:
        "When it comes to selecting developers at Brandsmashers Tech, we do not let loose anyone who does not conform to the highest standards set in this industry. The team assembled by our company comprises professional developers familiar with advanced technologies including React, Node.js and Java. Based in Bhopal, we are a software development company that strives to provide the best as a result of that, we make sure our developers are always up to date with new technologies through training and performance evaluations.. This guarantees that every project is handled by qualified experts who deliver quality solutions on time.",
    },
    {
      id: 3,
      question: "What industries do you serve?",
      answer:
        "Our solutions at Brandsmashers Tech range across most sectors such as e-commerce and online businesses, healthcare, education, logistics, agriculture, among others. CIM has been an established software company in India and provides our solutions as per the specific requirements of each of these sectors to ensure the optimum utilization and development of our services. Regardless of whether your organization operates in the retail or the healthcare industry we provide the necessary knowledge to match your business environment and ensure success.",
    },
    {
      id: 4,
      question: " What is your typical project timeline?",
      answer:
        "The time it takes to complete projects can therefore not be generalized but it depends on the project at Brandsmashers Tech. The time required from the conceptual stage to project completion in SMM varies, and it normally ranges from 4 weeks in a small project to 12 weeks in an mid-sized project. We are a top software development company that employs the agile software development approach, making changes and reporting to the customer on progress constantly. The project deadlines are particularly well managed through teamwork with the clients to enhance quality.",
    },
    {
      id: 5,
      question: " Do you offer post-launch support?",
      answer:
        "Of course, we provide post-launch assistance for all the projects which have been developed by our fleet of professionals. Being a reliable company, which provides software development in Bhopal, we realize that you might change your requirements after the project is completed. These are steps such as bug fixes, upgrades, and adding qualities to software applications which we undertake to assist in maintaining your software throughout its usage.",
    },
    {
      id: 6,
      question: "Can Brandsmashers Tech scale a team for a large project?",
      answer:
        "Absolutely. Brandsmashers Tech employs the capability of acquiring development teams for big-scale and complicated projects. We are one of the leading software development companies in India and our staff augmentation services enable clients to quickly scale their team with professional developers, regardless of the current trends, to meet project needs immediately.",
    },
    {
      id: 7,
      question: " What technologies do your developers specialize in?",
      answer:
        "Our developers at Brandsmashers Tech specialize in a wide array of technologies, including React, Vue.js, Node.js, Java, React Native, and AWS. This diverse skill set allows us to offer innovative solutions tailored to your business needs. Whether youre looking for a custom-built application or need to improve your existing systems, our expertise as a leading software development company ensures you get the best technical solutions.",
    },
  ];
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
};

export default Faq;
