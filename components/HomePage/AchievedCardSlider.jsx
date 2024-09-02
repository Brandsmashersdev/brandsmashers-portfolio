

// import Slider from 'react-slick';
// import AchievedCard from './AchievedCard'; // Correct import name
// import styles from '../../src/styles/Hero/AchievedCardSlider.module.css'; // Correct path and name
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import image1 from '../../public/Hero/img1.png'; // Make sure this path is correct

// const AchievedCardSlider = () => {
//   const cards = [
//     {
//       image: image1,
//       title: 'AND',
//       description: "Application Development Maintenance for India's Top Fashion Brands",
//     },
//     {
//       image: image1,
//       title: 'PVR',
//       description: 'Development of a Tablet App for a Leading Entertainment Service Provider',
//     },
//     {
//       image: image1,
//       title: 'Space Matrix',
//       description: 'Smart Office Solutions Development with Next-Gen IoT Capabilities',
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
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
//     <div className={styles.sliderContainer}>
//       <Slider {...settings}>
//         {cards.map((card, index) => (
//           <AchievedCard key={index} {...card} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default AchievedCardSlider; // Corrected component name

import Slider from 'react-slick';
import AchievedCard from './AchievedCard'; // Correct import name
import styles from '../../src/styles/Hero/AchievedCardSlider.module.css'; // Correct path and name
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../public/Hero/img1.png'; // Ensure this path is correct

const AchievedCardSlider = () => {
  const cards = [
    {
      image: image1,
      title: 'AND',
      description: "Application Development Maintenance for India's Top Fashion Brands",
    },
    {
      image: image1,
      title: 'PVR',
      description: 'Development of a Tablet App for a Leading Entertainment Service Provider',
    },
    {
      image: image1,
      title: 'Space Matrix',
      description: 'Smart Office Solutions Development with Next-Gen IoT Capabilities',
    },
  ];

  const settings = {
    dots: true,
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
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
    <div className={styles.sliderContainer}>
      <h1 className={styles.heading}>Achieved</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <AchievedCard key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default AchievedCardSlider;
