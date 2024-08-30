import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/Hero/HeroSection.module.css';
import StarRating from './StarRating';
import Image from 'next/image';
import google from '../../public/Hero/Google-Emblem.png';
import clutch from '../../public/Hero/clutch.png';
import g from '../../public/Hero/g.png';
import AnimatedButton from './AnimationButton';
import CardSlider from './CardSlider';
// import ProfileSlider from './ProfileSlider';
// import Slid from './slid';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      
      <div className={styles.heroContainer}>
        <h1 className={styles.heading}>
          We Deliver Perfectly<br></br> Matched, Highly 
          <br></br>
         <span className={styles.highlight}> Experienced Developers!<span className={styles.highlight1}></span></span>
        </h1>

        <p>
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
           <CardSlider className={styles. card}/>
        </div>
        </div>
      </div>
 
  );
};

export default HeroSection;
