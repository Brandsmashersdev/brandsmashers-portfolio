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

const ServiceFeatures = () => {
  const features = [
    {
      icon: <BrainCircuit className={styles.icon} />,
      title: "Custom Software Development",
      description:
        "We also develop custom software to improve your organisational processes thus improving productivity and efficiency.",
    },
    {
      icon: <LayoutTemplate className={styles.icon} />,
      title: "Web Development",
      description:
        "Being one of the best web design company in Bhopal, while designing our products, we lay extensive focus on speed, responsiveness and user interactivity.",
    },
    {
      icon: <ShoppingCart className={styles.icon} />,
      title: "E-Commerce Solutions",
      description:
        "Our configurable eCommerce solutions help increase your revenues – whether starting from a new store or redesign existing one.",
    },
    {
      icon: <TabletSmartphone className={styles.icon} />,
      title: "Mobile App Development",
      description:
        "We create stable iOS and Android applications with a comprehensive list of natural and appealing UX/UI design.",
    },
    {
      icon: <Component className={styles.icon} />,
      title: "UI/UX Design",
      description:
        "Our designers build interfaces simplifying the way a user is able to interact with the digital product with ease and without strain.",
    },
    {
      icon: <Settings className={styles.icon} />,
      title: "Product Development",
      description:
        "From idea generation to market entry, we develop effective competitors &apos; products employing innovative technology and current tendencies.",
    },
    {
      icon: <Activity className={styles.icon} />,
      title: "Digital Marketing",
      description:
        "Our SEO, social media and content creation services increase brand visibility and website ranking on the search engines.",
    },
    {
      icon: <UserRoundCog className={styles.icon} />,
      title: "Staff Augmentation",
      description:
        "Find experienced IT professionals promptly and ramp up your team – that will allow you to complete the project as soon as possible without lowering the desired quality.",
    },
    {
      icon: <Airplay className={styles.icon} />,
      title: "Desktop App Development",
      description:
        "We build effective and safe desktop applications for your business to solve your industry’s distinct requirements and sustain their stability and functionality in the long run.",
    },
  ];

  return (
    <section className={styles.container}>
      <h3>What We Do</h3>
      <p style={{ marginBottom: "2rem" }}>
        IT services that top the market offering a unique and excellent solution
        for business throughout all sectors. Being an experienced software
        development company, our solutions are designed to assist companies to
        be successful in present day marketplace.
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

export default ServiceFeatures;
