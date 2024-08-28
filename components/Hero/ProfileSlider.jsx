import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../src/styles/Hero/ProfileSlider.module.css';
import img1 from '../../public/Hero/img1.png'; 
import img2 from '../../public/Hero/download.png'; 
import { FiAlignJustify, FiSearch } from 'react-icons/fi';

const profiles = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img1 },
  { id: 4, image: img2 },
  { id: 5, image: img1 },
  
];

const ProfileSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance the slide continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 3000); // Adjust time as needed
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {profiles.map((profile) => (
              <div key={profile.id} className={styles.profileSlide}>
                <Image src={profile.image} alt={`Profile ${profile.id}`} className={styles.imagess} width={50} height={50} />
              </div>
            ))}
          </div>
        
        </div>
        <div className={styles.buttoss}>
        <button className={styles.nextButton} onClick={nextSlide}>
          +100k <FiAlignJustify />
          <FiSearch className={styles.searchIcon} />
        </button>
        </div>
        </div>
    </div>
  );
};

export default ProfileSlider;
