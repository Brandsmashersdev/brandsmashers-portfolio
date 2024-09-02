// components/PartnersCarousel.js

import React from 'react';
import Slider from 'react-slick';
import styles from '../../src/styles/Hero/OurPartners.module.css'; // Importing CSS module

// Import the slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import clutchs from '../../public/Hero/clutchs.png'; // Correct path relative to your project
import googles from '../../public/Hero/googles.png';
import glassdoor from '../../public/Hero/GlassdoorLogo.png';

const OurPartners = () => {
  // Slider settings
//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//     pauseOnHover: false,
//     cssEase: "linear"
//   };

const settings = {
    dots: true,
    infinite: true, // Infinite looping
    speed: 800, // Transition speed
    slidesToShow: 3, // Number of slides shown at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    centerMode: true, // Center the active slide
    centerPadding: '0px', // Padding around the center slide
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Speed of autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Our Partners</h2>
      <Slider {...settings} className={styles.slider}>
        {/* Example usage of the Next.js Image component */}
        <div className={styles.slide}>
          <Image src={clutchs} width={50} height={50} alt="AWS Partner" />
        </div>
        <div className={styles.slide}>
          <Image src={googles} width={50} height={50} alt="Microsoft Partner" />
        </div>
        <div className={styles.slide}>
          <Image src={glassdoor} width={50} height={50} alt="Google Partner" />
        </div>
      
      </Slider>
    </div>
  );
};

export default OurPartners;
