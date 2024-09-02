// components/HeroSection.js
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/Hero/Homepages.module.css';
import Image from 'next/image';
// import images from '../../public/Hero/homepage.png';
import images from '../../public/Hero/AIMarketing.png';
// import NumbersSection from './NumberSection';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Brandsmashers<br />
            <span className={styles.highlight}>Software Development</span> <br />
            Company
          </h1>
          <p className={styles.description}>
            Delivering custom software development services and solutions to build intelligent enterprises with speed and agility.
          </p>
          <button className={styles.ctaButton}>Consult with Us<FaArrowRight className={styles.arrowIcon}></FaArrowRight></button>
        </div>
        
        <div className={styles.imageContainer}>
          {/* Replace with an actual image */}
          <Image src={images} className={styles.heroImage} />
        </div>
      </div>
      
      {/* <div>
      <NumbersSection/>
      </div> */}

    </section>
  );
};

export default HeroSection;
