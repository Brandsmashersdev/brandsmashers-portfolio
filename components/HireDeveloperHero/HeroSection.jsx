import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/Hero/HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/HireDevelopers.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.heroContainer}>
        <h1 className={styles.heading}>
          We Deliver Perfectly<br></br> Matched, Highly 
          <br></br>
         <span className={styles.highlight}> Experienced Developers!<span className={styles.highlight1}></span></span>
        </h1>

        <p className={styles.paragraph}>
       Get the best profiles in <span className={styles.hours}>24-48 hours,</span>
       conduct just one or two interviews with pre-vetted candidates, and onboard our domain experts immediately.
        </p>

        <div className={styles.buttons}>
          <button className={styles.hireButton}>
            Hire Developers <FaArrowRight className={styles.arrowIcon} />
          </button>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        
     
        {/* <div className={styles.heroImage}> </div> */}
        <div className={styles.cardSlid}>
           {/* <CardSlider className={styles.card}/> */}
        </div>
        </div>
      
      </div>
 
  );
};

export default HeroSection;
