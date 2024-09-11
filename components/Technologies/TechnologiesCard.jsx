import React from 'react';
import styles from '@/styles/Technologies/TechnologiesCard.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaLock, FaLaptopCode, FaCog, FaUsers, FaDatabase } from 'react-icons/fa';

const TechnologiesCard = () => {
  const features = [
    {
      icon: <FaLock size={40} />, // Using react-icons
      title: 'Backend',
      description:
        'Combat development challenges by reinforcing the backend functioning of the application with easy synchronization of different features and seamless communication with relational or NoSQL databases.',
    },
    {
      icon: <FaCog size={40} />,
      title: 'Frontend',
      description:
        'Reinvent the look and feel of web applications using JavaScript technologies along with HTML and CSS to improve aesthetics and enhance the digital experience of your customers.',
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Mobile',
      description:
        'Transform web applications into leading-edge mobile applications by enabling mobility across multiple platforms such as iOS, Android, and Windows.',
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Database',
      description:
        'Consolidate data from multiple complex data sources and manage end-to-end data integration to predict significant and actionable insights.',
    },
    {
      icon: <FaDatabase size={40} />,
      title: 'Testing',
      description:
        'Ensure high performing and bug-free applications by implementing our structured testing methodologies for your tangled and complex applications.',
    },

    {
        icon: <FaDatabase size={40} />,
        title: 'Cloud & DevOps',
        description:
          'Fast Track your deliveries using agile and cloud-based technology approaches for anytime and anywhere accessibility and transparency.',
      },
    {
        icon: <FaDatabase size={40} />,
        title: 'Others',
        description:
          'Leverage our capabilities to better upgrade and reinforce your business models using leading modern technology offerings.',
    },
  ];

  const settings = {            
    infinite: true,         // Infinite loop sliding
    speed: 4000,             // Transition speed
    slidesToShow: 6,        // Show 3 cards at once
    slidesToScroll: 1,      // Scroll one card at a timex
    autoplay: true,         
    autoplaySpeed: 0, 
    cssEase:'Linear', // Auto slide every 3 seconds
    pauseOnHover: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards at a time for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 card at a time for mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.title}>Technologies</h2>
      <p className={styles.subtitle}>
      Designing and developing innovative and professional software solutions for hundreds of companies across global tech markets for almost two decades now.
      </p>
      <Slider {...settings} className={styles.slider}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologiesCard;
