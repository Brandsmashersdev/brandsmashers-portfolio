import React, { useState, useEffect } from 'react';
import styles from "../../src/styles/Hero/Navbar.module.css";
import Image from 'next/image';
import logo from '../../public/Hero/BrandsmashersLogo.png';
import Link from 'next/link'; // Import Link component
import AnimatedButton from '../HireDeveloperHero/AnimationButton';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { useRouter } from 'next/router'; 

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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
  }, []);

  // const NAVLINKS = ['/', '/Hire Developers', '/Services', '/Technologies', '/About']

  const NAVLINKS = [
    { path: '/', label: 'Home' },
    { path: '/HireDevelopers', label: 'Hire Developers' },
    { path: '/Services', label: 'Services' },
    { path: '/Technologies', label: 'Technologies' },
    { path: '/About', label: 'About Us' }
  ];
  

  return (
    <div className={`${styles.navContainer} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navRow}>
        <div className={styles.logo}>
          <Image 
            src={logo} 
            alt="brandsmashers Logo"
            layout="fixed" 
            height={50}
            width={50} 
          />
          <div className={styles.brandName}></div>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
        </div>

        <div className={styles.navLinks}>
        {NAVLINKS.map(({path, label}) => (
            <Link href={path} key={path}>
              <span className={router.pathname === path ? styles.active : ''}>
                {path === '/' ? 'Home' : label}
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.navButtons}>
          {/* <AnimatedButton text="Hire Now" />  */}
          <Link href="/contactus">
            <button className={styles.animatedButton}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className={`${styles.sidebarMenu} ${isOpen ? styles.showMenu : ''}`}>
        <div className={styles.animatedButtons}>
          <AnimatedButton className={styles.animatedButtonss} />
        </div>

        {NAVLINKS.map(({path, label}) => (
          <Link href={path} key={path} onClick={goToHome}>
            <span className={router.pathname === path ? styles.active : ''}>
              {path === '/' ? 'Home' : label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
