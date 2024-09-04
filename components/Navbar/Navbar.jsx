import React, { useState } from 'react';
import styles from "../../src/styles/Hero/Navbar.module.css";
import Image from 'next/image';
import logo from '../../public/Hero/bransdmasherslogo.png';

import AnimatedButton from '../HireDeveloperHero/AnimationButton';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import both the hamburger and cross icons
import { useRouter } from 'next/router'; // Import useRouter for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize router

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to navigate to the home page
  const goToHome = () => {
    setIsOpen(false);
    router.push('/'); // Navigate to the home page
  };

  return (
    <div className={styles.navContainer}>
      {/* Main Navbar */}
      <div className={styles.navRow}>
        {/* Logo and Brand Name */}
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="brandsmashers Logo"
            layout="fixed" 
            height={90}
            width={90} // Adjust based on your design
          />
          <div className={styles.brandName}>Brandsmashers Tech</div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle between icons */}
        </div>

        {/* Navigation Links for Desktop */}
        <div className={styles.navLinks}>
        
          <a href="/">Home</a>
          <a href="/HireDevelopers">Hire Developers</a>
          <a href="/Services">Services</a>
          <a href="/Technologies">Technologies</a>
          <a href="/About">About Us</a>
        </div>

        {/* Action Buttons for Desktop */}
        <div className={styles.navButtons}>
          <AnimatedButton text="Hire Now" /> {/* Adjust button text */}
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`${styles.sidebarMenu} ${isOpen ? styles.showMenu : ''}`}>
       
      <div className={styles.animatedButtons}>
         <AnimatedButton  className={styles.animatedButtonss} />
      </div>

        <a href="/HomeSection" onClick={goToHome}>Home</a> {/* Close and navigate to Home */}
        <a href="/Home">Hire Developers</a>
        <a href="#">Services</a>
        <a href="#">Technologies</a>
        <a href="/About">About Us</a>
      
      </div>
    </div>
  );
};

export default Navbar;
