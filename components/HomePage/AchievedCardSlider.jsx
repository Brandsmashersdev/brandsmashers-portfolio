// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from '../../src/styles/Hero/AchievedCardSlider.module.css';
// import Image from 'next/image';
// import AchievedData from '../../data/AchievedCardSlider';

// const AchievedCardSlider = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     // Fetch data from the JSON file
//     fetch('/data/cardsData.json')
//       .then(response => response.json())
//       .then(data => setCards(data))
//       .catch(error => console.error('Error fetching card data:', error));
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
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
//     <div className={styles.sliderContainer}>
//       <h1 className={styles.heading}>Achieved</h1>
//       <Slider {...settings}>
//         {AchievedData.map((card, index) => (
//           <div className={styles.card} key={index}>
//             <Image
//               src={card.image}
//               layout="responsive"
//               width={200} // Ensure width matches CSS
//               height={200} // Ensure height matches CSS
//               className={styles.cardImage}
//               alt={card.title}
//             />
//             <div className={styles.cardContent}>
//               <h3 className={styles.cardTitle}>{card.title}</h3>
//               <p className={styles.cardDescription}>{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default AchievedCardSlider;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../src/styles/Hero/AchievedCardSlider.module.css';
import Image from 'next/image';

const AchievedCardSlider = () => {
  // Define the data directly within the component
  const cards = [
    {
      image: "/Hero/images4.png",
      title: "Alvara Atkins",
      description: "The Team at Brandsmashers transformed our outdated systems into a seamless digital ecosystem, revolutionizing our operation."
    },
    {
      image: "/Hero/abc.png",
      title: "Fabian Gattuzo",
      description: "With Brandsmashers innovative software solution we experienced unparalleled efficiency and growth in our business."
    },
    {
      image: "/Hero/images4.png",
      title: "Alizee Bonita",
      description: "Thanks to Brandsmashers expertise, our transition to the cloud was smooth and seamless, resulting in significant cost savings and improved scalability."
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
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
    <div className={styles.sliderContainer}>
      <h1 className={styles.heading}>Achieved</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={card.image}
              layout="responsive"
              width={300} // Fixed width for consistency
              height={200} // Fixed height for consistency
              className={styles.cardImage}
              alt={card.title}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AchievedCardSlider;
