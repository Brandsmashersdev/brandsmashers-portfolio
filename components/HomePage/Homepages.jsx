

// // components/HeroSection.js
// import { FaArrowRight } from 'react-icons/fa';
// import styles from '../../src/styles/Hero/Homepages.module.css';
// import Image from 'next/image';
// import images from '../../public/Hero/AIMarketing.png';
// import Slider from 'react-slick';

// const HeroSection = () => {


//     // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: false,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
  
//   return (
//     <section className={styles.heroSection}>
//       <Slider {...settings}>
//         {sliderData.map((slide) => (
//           <div key={slide}>
//             <div className={styles.container}>
//               <div className={styles.content}>
//                 <h1 className={styles.title}>
//                   Brandsmashers<br />
//                   <span className={styles.highlight}>Software Development</span> <br />
//                   Company
//                 </h1>
//                 <p className={styles.description}>
//                   Delivering custom software development services and solutions to build intelligent enterprises with speed and agility.
//                 </p>
//                 <button className={styles.ctaButton}>Consult with Us<FaArrowRight className={styles.arrowIcon}></FaArrowRight></button>
//               </div>
              
//               <div className={styles.imageContainer}>
//                 <Image src={images} className={styles.heroImage} alt="Hero Image" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default HeroSection;

// components/HeroSection.js
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../src/styles/Hero/Homepages.module.css';
import Image from 'next/image';
import Slider from 'react-slick';
import mobileAppImage from '../../public/Hero/AIMarketing.png'; // Add appropriate image paths
import uiUxImage from '../../public/Hero/AIMarketing.png';
import customSoftwareImage from '../../public/Hero/AIMarketing.png';
import mlImage from '../../public/Hero/AIMarketing.png';

const HeroSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
      <Slider {...settings}>
        {/* First Slide: Mobile App */}
        <div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Brandsmashers<br />
                <span className={styles.highlight}>Mobile App</span> <br />
                Company
              </h1>
              <p className={styles.description}>
                Delivering custom mobile app development services and solutions to build intelligent enterprises with speed and agility.
              </p>
              <button className={styles.ctaButton}>
                Consult with Us
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
            <div className={styles.imageContainer}>
              <Image src={mobileAppImage} className={styles.heroImage} alt="Mobile App" />
            </div>
          </div>
        </div>

        {/* Second Slide: UI-UX Design */}
        <div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Brandsmashers<br />
                <span className={styles.highlight}>UI-UX Design</span> <br />
                Company
              </h1>
              <p className={styles.description}>
                Crafting intuitive and user-friendly interfaces that provide seamless user experiences.
              </p>
              <button className={styles.ctaButton}>
                Consult with Us
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
            <div className={styles.imageContainer}>
              <Image src={uiUxImage} className={styles.heroImage} alt="UI-UX Design" />
            </div>
          </div>
        </div>

        {/* Third Slide: Custom Software Development */}
        <div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Brandsmashers<br />
                <span className={styles.highlight}>Custom Software Development</span> <br />
                Company
              </h1>
              <p className={styles.description}>
                Delivering tailored software solutions to meet your business needs and drive growth.
              </p>
              <button className={styles.ctaButton}>
                Consult with Us
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
            <div className={styles.imageContainer}>
              <Image src={customSoftwareImage} className={styles.heroImage} alt="Custom Software Development" />
            </div>
          </div>
        </div>

        {/* Fourth Slide: Machine Learning */}
        <div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Brandsmashers<br />
                <span className={styles.highlight}>Machine Learning</span> <br />
                Company
              </h1>
              <p className={styles.description}>
                Leveraging machine learning to build intelligent systems that enhance decision-making and automation.
              </p>
              <button className={styles.ctaButton}>
                Consult with Us
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
            <div className={styles.imageContainer}>
              <Image src={mlImage} className={styles.heroImage} alt="Machine Learning" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;

