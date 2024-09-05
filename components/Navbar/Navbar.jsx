import React, { useState, useEffect } from 'react';
import styles from "../../src/styles/Hero/Navbar.module.css";
import Image from 'next/image';
import logo from '../../public/Hero/logobrandsmasher.png';

import AnimatedButton from '../HireDeveloperHero/AnimationButton';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import both the hamburger and cross icons
import { useRouter } from 'next/router'; // Import useRouter for navigation

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goToHome = () => {
    setIsOpen(false);
    router.push('/'); 
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrollY:', window.scrollY); // Debugging
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.navContainer} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navRow}>
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="brandsmashers Logo"
            layout="fixed" 
            height={70}
            width={70} 
          />
          <div className={styles.brandName}>Brandsmashers Tech</div>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
        </div>

        <div className={styles.navLinks}>
        
          <a href="/">Home</a>
          <a href="/HireDevelopers">Hire Developers</a>
          <a href="/Services">Services</a>
          <a href="/Technologies">Technologies</a>
          <a href="/About">About Us</a>
        </div>

        <div className={styles.navButtons}>
          <AnimatedButton text="Hire Now" /> 
        </div>
      </div>

      <div className={`${styles.sidebarMenu} ${isOpen ? styles.showMenu : ''}`}>
        <div className={styles.animatedButtons}>
          <AnimatedButton className={styles.animatedButtonss} />
        </div>

        <a href="/HomeSection" onClick={goToHome}>Home</a> 
        <a href="/Home">Hire Developers</a>
        <a href="#">Services</a>
        <a href="#">Technologies</a>
        <a href="/About">About Us</a>
      </div>
    </div>
  );
};

export default Navbar;
