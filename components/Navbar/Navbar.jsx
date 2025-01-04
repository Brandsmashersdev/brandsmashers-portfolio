import React, { useState, useEffect } from "react";
import styles from "../../src/styles/Hero/Navbar.module.css";
import Image from "next/image";
import logo from "../../public/Hero/BrandsmashersLogo.png";
import Link from "next/link";
import AnimatedButton from "../HireDeveloperHero/AnimationButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // Disable automatic scroll restoration
    }

    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Always scroll to top
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const NAVLINKS = [
    { path: "/HireDevelopers#hiredevelopers", label: "HIRE DEVELOPERS" },
    { path: "/Services#serviceHero", label: "SERVICES" },
    { path: "/Technologies#Technologies", label: "TECHNOLOGIES" },
    { path: "/Blog#blogs", label: "BLOGS" },
    { path: "/About#about-us", label: "ABOUT US" },
  ];

  return (
    <div className={`${styles.navContainer} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.navRow}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="brandsmashers Logo"
              layout="fixed"
              height={80}
              width={80}
            />
          </Link>
          <div className={styles.brandName}></div>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={styles.navLinks}>
          {NAVLINKS.map(({ path, label }) => (
            <Link href={path} key={path}>
              <span
                className={router.pathname === path ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                {path === "/" ? "Home" : label}
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.navButtons}>
          <Link href="/contactus">
            <button className={styles.animatedButton}>Contact Us</button>
          </Link>
        </div>
      </div>

      <div className={`${styles.sidebarMenu} ${isOpen ? styles.showMenu : ""}`}>
        <div className={styles.animatedButtons}>
          <AnimatedButton className={styles.animatedButtonss} />
        </div>

        {NAVLINKS.map(({ path, label }) => (
          <Link href={path} key={path}>
            <span
              className={router.pathname === path ? styles.active : ""}
              onClick={() => setIsOpen(false)}
            >
              {path === "/" ? "Home" : label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;