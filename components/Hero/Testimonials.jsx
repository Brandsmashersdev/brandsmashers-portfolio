import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "@/styles/Testimonials.module.css"
import testimonials from '../../data/testimonials'; 

const Testimonials = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <button 
              className={`${styles.slickArrow} ${styles.slickNext}`} 
              onClick={onClick} 
              aria-label="Next"
            >
              <i className="fa fa-arrow-right"></i>
            </button>
          );
        };
        
        const PrevArrow = ({ onClick }) => {
          return (
            <button 
              className={`${styles.slickArrow} ${styles.slickPrev}`}  
              onClick={onClick} 
              aria-label="Previous"
            >
              <i className="fa fa-arrow-left"></i>
            </button>
          );
        };

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false, 
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
                }
            }
            ]
        };

  return (
    <div className={styles.testimonials_section}>
      <h2 className={styles.testimonials_title}>Built on Trust and Results</h2>
      
      <div className={styles.subheading}>
      <p className={styles.testimonials_subtitle}>
      We excel in delivering exceptional experiences and accelerating your business success, driving results that truly matter.
      </p>
      </div>
        <div className={styles.cardsContainer}>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonial_card}>
                    <div className={styles.testimonial_logo}>{testimonial.logo}</div>
                    <p className={styles.testimonial_text}>{testimonial.text}</p>
                    <div className={styles.testimonial_author}>
                    <Image src={testimonial.image} alt={testimonial.name} className={styles.testimonial_image} width={50}  height={50}/>
                    <div>
                        <h4 className={styles.testimonial_name}>{testimonial.name}</h4>
                        <p className={styles.testimonial_title}>{testimonial.title}</p>
                    </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    </div>
  );
}

export default Testimonials;
