// import { FaArrowRight } from 'react-icons/fa';
// import styles from '../../src/styles/Hero/HeroSection.module.css';
// import StarRating from './StarRating';
// import Image from 'next/image';
// import google from '../../public/Hero/googlelogo.png';
// import clutch from '../../public/Hero/clutch.png';
// // import imagesb from '../../public/imagesb.png';
// import g from '../../public/Hero/g.png';
// import AnimatedButton from './AnimationButton';
// import CardSlider from './CardSlider';
// import ProfileSlider from './ProfileSlider';
// import video from '../../public/Hero/video.mp4';

// const HeroSection = () => {
//   return (
//     <div className={styles.heroSection}>
//       <div className={styles.heroContainer}>
//         <h1 className={styles.heading}>
//           We Deliver Perfectly Matched,Highly 
//           <br />
//          <span className={styles.highlight}> Experienced Developers!<span className={styles.highlight1}></span></span>
//         </h1>

//         <p>
//           Get best profiles in <span className={styles.hours}>24-48 hours,</span> conduct just one or two interviews with <br /> pre-vetted candidates, and onboard our domain experts immediately
//        </p>

//         <div className={styles.buttons}>
//           <button className={styles.hireButton}>
//           Hire Developers <FaArrowRight className={styles.arrowIcon} />
//           </button>
//           <button className={styles.contactButton}>Contact Us</button>
//         </div>
//       </div>
      
      
//       <div className={styles.imageContainer}>
       
//       <div>
//       <video width="600" controls>
//         <source src={video} type="video/mp4" />
        
//       </video>
//     </div>


//         {/*<div className={styles.heroImage}> </div> */}
//       <CardSlider/>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/Hero/HeroSection.module.css';
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
          We Deliver Perfectly Matched, Highly 
          <br />
         <span className={styles.highlight}> Experienced Developers!<span className={styles.highlight1}></span></span>
        </h1>

        <p>
          Get the best profiles in <span className={styles.hours}>24-48 hours,</span> conduct just one or two interviews with <br /> pre-vetted candidates, and onboard our domain experts immediately.
        </p>

        <div className={styles.buttons}>
          <button className={styles.hireButton}>
            Hire Developers <FaArrowRight className={styles.arrowIcon} />
          </button>
          <button className={styles.contactButton}>Contact Us</button>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.video}>
          <video width={500} height={100}  autoPlay >
            <source src="/Hero/video.mp4.gif" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);"
         width="800" height="450" 
         src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fc3FBJafsJ17icNUthdQCsy%2FUntitled%3Fnode-id%3D3-7%26t%3Dj7jseLL7J4V8tND7-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1" 
         allowfullscreen></iframe> */}

        {/* <div className={styles.heroImage}> </div> */}
        <CardSlider/>
      </div>
    </div>
  );
};

export default HeroSection;
