// import React from 'react';
// import styles from '../../src/styles/Hero/Service.module.css';
// import { services } from '../../data/services';
// import Image from 'next/image'; // Import the Image component

// const Services = () => {
//   return (
//     <div className={styles.container}>
//       <section className={styles.services}>
//         <h2>Our Services</h2>
//         <div className={styles.servicesGrid}>
//           {services.map((service, index) => (
//             <div key={index} className={styles.serviceBox}>
//               <Image
//                 src={service.icon} // Use Image instead of img
//                 alt={service.title} // Corrected to service.title
//                 className={styles.serviceIcon}
//                 width={100} // Set appropriate width
//                 height={100} // Set appropriate height
//               />
//               <p>{service.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
import React from "react";
import styles from "../../src/styles/Hero/Service.module.css";
import {
  BrainCircuit,
  LayoutTemplate,
  ShoppingCart,
  TabletSmartphone,
  Component,
  Settings,
  Activity,
  UserRoundCog,
  Airplay,
} from "lucide-react";

const WhyBrandSmashers = () => {
  const features = [
    {
      icon: <BrainCircuit className={styles.icon} />,
      title: "Expertise Across Domains",
      description:
        "With experience across 20+ fields, we integrate industry-specific knowledge into every project.",
    },
    {
      icon: <LayoutTemplate className={styles.icon} />,
      title: "Customized Solutions",
      description: "Tailored to your business needs for optimal results.",
    },
    {
      icon: <ShoppingCart className={styles.icon} />,
      title: "Client-First Approach",
      description: "We collaborate at every stage to ensure the best outcomes.",
    },
    {
      icon: <TabletSmartphone className={styles.icon} />,
      title: "Global Reach",
      description:
        " We offer effective solutions for businesses of all sizes worldwide.",
    },

    {
      icon: <Activity className={styles.icon} />,
      title: "On-Demand Flexibility",
      description:
        "They are sufficient and flexible to one’s requirements of the project.",
    },
    {
      icon: <UserRoundCog className={styles.icon} />,
      title: "Eliminate Risk",
      description:
        " With our well-developed approaches and professional staff, we guarantee our projects’ success with a low probability of failure.",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 style={{ marginBottom: "2rem" }}>
        Why Choose Brandsmashers for IT Services and Solutions?
      </h2>
      <p style={{ marginBottom: "2rem" }}>
        Brandsmashers is one of the leading software development companies in
        India which provides a spectrum of services and products to help in your
        organization’s digitalization. Here, you will find everything from
        unique custom software, mobile application development, SEO/SEM, and
        other comprehensive advertising services. Successful V2MOM-approached
        global projects allow providing low-risk as well as flexibly scalable
        solutions for companies of all sizes. Select Brandsmashers for IT
        services solutions that adapt to your business needs and arent stagnant.
      </p>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconContainer}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBrandSmashers;
