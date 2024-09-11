// components/CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import styles from '../../src/styles/Hero/Achieved.module.css';
import Image from 'next/image';

// Import the same image for all cards
import image1 from '../../public/Hero/image1.png';

const Achieved = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Uniform cards with the same image for consistency
  const cards = [
    { 
      id: 1, 
      image: image1,
      title: 'Alizee Bonita',
      description: 'Thanks to Brandsmashers expertise, our transition to the cloud was smooth and seamless, resulting in significant cost savings and improved scalability.'
    },
    { 
      id: 2, 
      image: image1,
      title: 'Alvara Atkins', 
      description: 'The Team at Brandsmashers transformed our outdated systems into a seamless digital ecosystem, revolutionizing our operation.' 
    },
    { 
      id: 3, 
      image: image1,  
      title: 'Fabian Gattuzo', 
      description: 'With Brandsmashers innovative software solution, we experienced unparalleled efficiency and growth in our business.' 
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardContent}>
              <Image 
                src={card.image} 
                alt={card.title} 
                width={300}  // Customize the width of the image
                height={300} // Customize the height of the image
                className={styles.cardImage} 
              />
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Achieved;
