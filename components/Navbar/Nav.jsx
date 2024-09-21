import React, { useState, useEffect } from 'react';
import styles from "../../src/styles/Hero/Nav.module.css";
import Image from 'next/image';
import logo from '../../public/Hero/BrandsmashersLogo.png';
import AnimatedButton from '../HireDeveloperHero/AnimationButton';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { useRouter } from 'next/router'; 
import Link from 'next/link'; // Add this line to import Link

const Nav = () => {
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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navContainer} ${scrolled ? styles.navScrolled : styles.navTransparent}`}>
      <div className={styles.navRow}>
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="brandsmashers Logo"
            layout="fixed" 
            height={70}
            width={70} 
          />
          <div className={styles.brandName}></div>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
        </div>

        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/HireDevelopers">Hire Developers</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Technologies">Technologies</Link>
          <Link href="/About">About Us</Link>
        </div>

        <div className={styles.navButtons}>
          <Link href="/contactus"> 
            <button className={styles.animatedButton}>
              Contact Us
            </button> 
          </Link>
        </div>
      </div>

      <div className={`${styles.sidebarMenu} ${isOpen ? styles.showMenu : ''}`}>
        <div className={styles.navButtons}>
          <Link href="/contactus">
            <button className={styles.animatedButton}>
              Contact Us
            </button>
          </Link>
        </div>

        <Link href="/" onClick={goToHome}>Home</Link> 
        <Link href="/HireDevelopers">Hire Developers</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Technologies">Technologies</Link>
        <Link href="/About">About Us</Link>
      </div>
    </div>
  );
};

export default Nav;
