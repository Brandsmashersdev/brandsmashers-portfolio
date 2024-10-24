import React from "react";
import styles from "../../src/styles/Hero/ServiceFeatures.module.css";
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
        " We are aware of schedules, of projects. The team that we are deploying is flexible and hence can start contributing to your development needs as soon as possible.",
    },
  ];

  return (
    <section className={styles.container}>
      <h2>What We Do</h2>
      <p>
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
