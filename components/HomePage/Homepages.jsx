// components/HeroSection.js
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/Hero/Homepages.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Brandsmashers<br />
          <span className={styles.highlight}>Software Development</span> <br />
          Company
        </h1>
        <p className={styles.description}>
          Delivering custom software development services and solutions to build intelligent <br/> enterprises with speed and agility.
        </p>
        <button className={styles.ctaButton}>
          Consult with Us
          <FaArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
