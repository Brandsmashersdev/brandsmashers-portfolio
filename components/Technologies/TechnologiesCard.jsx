import React from "react";
import styles from "@/styles/Technologies/TechnologiesCard.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaLock,
  FaLaptopCode,
  FaCog,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

const TechnologiesCard = () => {
  const features = [
    {
      icon: <FaLock size={40} />, // Using react-icons
      title: "Backend",
      description:
        "Building robust, scalable backend systems that handle the business logic, manage databases, and integrate APIs for smooth application performance.",
    },
    {
      icon: <FaCog size={40} />,
      title: "Frontend",
      description:
        "Creating engaging and intuitive user interfaces with modern web technologies like React.js, Angular, and Vue.js, ensuring a seamless user experience.",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Mobile",
      description:
        "Developing high-performance mobile applications for iOS and Android, delivering seamless user experiences with cross-platform compatibility.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Database",
      description:
        "Managing and optimizing data storage solutions, from SQL to NoSQL databases, ensuring secure, efficient, and scalable data handling.",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Testing",
      description:
        "Ensuring software reliability and performance through automated and manual testing strategies, detecting bugs early to improve quality and user experience.",
    },

    {
      icon: <FaDatabase size={40} />,
      title: "Cloud & DevOps",
      description:
        "Leveraging cloud computing to provide scalable solutions and integrating DevOps for faster development cycles, continuous integration, and seamless deployments.",
    },
    {
      icon: <FaDatabase size={40} />,
      title: "Others",
      description:
        "Utilizing a wide range of technologies including AI, machine learning, blockchain, IoT, and more to deliver innovative, future-proof solutions tailored to client needs.",
    },
  ];

  const settings = {
    infinite: true, // Infinite loop sliding
    speed: 4000, // Transition speed
    slidesToShow: 6, // Show 3 cards at once
    slidesToScroll: 1, // Scroll one card at a timex
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "Linear", // Auto slide every 3 seconds
    pauseOnHover: true,
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
    <div className={styles.featuresSection} id="tech">
      <h2 className={styles.title}>Technologies</h2>
      <p className={styles.subtitle}>
        At Brandsmashers, we leverage cutting-edge technologies to deliver
        innovative, scalable, and secure solutions that meet the evolving needs
        of businesses across industries. Our expertise spans across a wide array
        of tools, platforms, and languages, ensuring that we can handle any
        project, regardless of its complexity or scope. Below is a list of
        technologies that power our custom software, mobile apps, digital
        marketing, and more.
      </p>
      <Slider {...settings} className={styles.slider}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>
              {feature.icon}
              <h3 className={styles.featureTitle}>{feature.title}</h3>
            </div>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologiesCard;
