// components/ServicesSection.jsx
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <div className={styles.iconWrapperOrange}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
      ),
      title: "On-Time Delivery",
      description: "Achieve optimal quality development and timely delivery within your time zone."
    },
    {
      icon: (
        <div className={styles.iconWrapperOrange}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
      ),
      title: "Customized Solutions",
      description: "Create tailored solutions that perfectly align with your specific project goals."
    },
    {
      icon: (
        <div className={styles.iconWrapperOrange}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
      ),
      title: "Expertise",
      description: "Hire professionals who ensure the most effective results for your business application."
    },
    {
      icon: (
        <div className={styles.iconWrapperOrange}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
      ),
      title: "Mitigation of Risk",
      description: "Minimize risks of failure with industry-vetted expertise for guaranteed success."
    },
    {
      icon: (
        <div className={styles.iconWrapperOrange}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor">
            <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24"/>
          </svg>
        </div>
      ),
      title: "Exceptional Skills",
      description: "Employ skilled experts to develop high-performance apps that elevate your business."
    },
    {
      icon: (
        <div className={styles.iconWrapperOrange}>
          <svg viewBox="0 0 24 24" className={styles.icon} fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </div>
      ),
      title: "Extensive Experience",
      description: "With over 12+ years of experience in the industry, we follow industry best practices to deliver solutions with proven results."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              {service.icon}
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;