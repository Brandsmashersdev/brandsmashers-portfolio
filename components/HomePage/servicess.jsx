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
  Clock,
  Box,
  Briefcase,
  Asterisk,
  Lightbulb,
  Settings,
} from "lucide-react";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <Clock className={styles.icon} />,
      title: "Top Talent",
      description:
        " We provide only the best. Some of our developers remain among the best in the market, with experience in many fields as well as emerging technologies.",
    },
    {
      icon: <Box className={styles.icon} />,
      title: "Flexible Engagement Models",
      description:
        " Whether you require our team for a one-off project or to join your ongoing project that requires remote developers, we can adapt to your situation.",
    },
    {
      icon: <Briefcase className={styles.icon} />,
      title: "Seamless Integration",
      description:
        " We maintain constant communication with our developers, ensuring they integrate as part of your internal team.",
    },
    {
      icon: <Asterisk className={styles.icon} />,
      title: "Proven Expertise",
      description:
        " Our developers possess experience in more than twenty domains, equipping them to manage complex development projects and achieve success at every stage.",
    },
    {
      icon: <Lightbulb className={styles.icon} />,
      title: "Cost-Effective Solutions",
      description:
        "We offer IT staff augmentation services to give you a pool of talented and skilled staff without the burden of hiring full-time staff for your organization thus giving you the flexibility needed to scale your team.",
    },
    {
      icon: <Settings className={styles.icon} />,
      title: "Rapid Deployment",
      description:
        " We are aware of schedules, of projects. The team that we are deploying is flexible and hence can start contributing to your development needs as soon as possible.",
    },
  ];

  return (
    <section className={styles.container}>
      <h2>Our Services</h2>
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
