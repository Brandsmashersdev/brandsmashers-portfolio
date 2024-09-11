// src/Investors.js
import React from 'react';
import Slider from 'react-slick';
import styles from '@/styles/HireDevelopers/Investors.module.css';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data/Investors'; // Import the data

const Investors = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

    <div className={styles.investors_section}>
          <h2 className={styles.ivestors_title}>Trusted by <span className={styles.highlight}> Top Investors </span>
          </h2>
        <div className={styles.slider_container}>
            <Slider {...settings}>
                {data.map((investor, index) => (
                    <div className={styles.slider_item} key={index}>
                        <Image src={investor.image} alt={investor.name} className={styles.profile_pic} width={80} height={80} />
                        <h3>{investor.name}</h3>
                        <p>{investor.title}</p>
                        <Image src={investor.logo} alt="company-logo" className={styles.company_logo} width={30} height={30}/>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    );
};

export default Investors;
