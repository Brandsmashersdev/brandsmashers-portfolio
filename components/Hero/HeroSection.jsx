// import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/HeroSection.module.css';
import StarRating from './StarRating';
import Image from 'next/image';
import google from '../../public/Hero/googlelogo.png';
import clutch from '../../public/Hero/clutch.png';
// import imagesb from '../../public/imagesb.png';
import g from '../../public/Hero/g.png';
import AnimatedButton from './AnimationButton';
import CardSlider from './CardSlider';
import ProfileSlider from './ProfileSlider';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heading}>
          Hire Software Developers Perfectly Matched
          <br />
          by AI, <span className={styles.highlight}>10X Fast<span className={styles.highlight1}>er!</span></span>
        </h1>

        <p>
          Skip CV screening, interview rounds, & save 90% time by either
          <br />
          hiring a software developer or your entire engineering team with us.
        </p>

        <div className={styles.buttons}>
          <button className={styles.hireButton}>
           {/* Hire Developers <FaArrowRight className={styles.arrowIcon} />*/}
          </button>
          <button className={styles.contactButton}>Contact Us</button>
        </div>

        <div className={styles.starContainer}>
          <StarRating />
        </div>

        <div className={styles.AnimatedButton}>
          <Image
            className={styles.google}
            src={google}
            alt="Google Logo"
            width={100}
            height={100}
            priority
          />
          <Image
            className={styles.clutch}
            src={clutch}
            alt="Clutch Logo"
            width={50}
            height={50}
            priority
          />
          <Image
            className={styles.g}
            src={g}
            alt="Some other logo"
            width={50}
            height={50}
            priority
          />
          
          <div><AnimatedButton /></div>
        </div>
      </div>
      
      
      <div className={styles.imageContainer}>
      <ProfileSlider/>  
        <div className={styles.heroImage}>
        
        </div>
        <CardSlider/>
      </div>
    </div>
  );
};

export default HeroSection;
