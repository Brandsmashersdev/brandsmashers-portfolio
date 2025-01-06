import React from "react";
import style from "@/styles/Footer.module.css";
import Link from "next/link";
import { LuLinkedin } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { SiYoutubekids } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";
import logo from "../../public/Hero/logoBrandsmashers.png";

const Footer = () => {
  
  const handleBackToTop = () => {
  
    if (document.body.scrollTop !== undefined) {
      document.body.scrollTop = 0;
    } else if (document.documentElement.scrollTop !== undefined) {
      document.documentElement.scrollTop = 0;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={style.footerContainer}>
      <div className={style.firstsection}>
        <div className={style.signupSection}>
          <h2>About us</h2>
          <p className={style.legalText}>
            Founded in 2018, Brandsmashers has quickly grown into a trusted name
            in the world of software development and staff augmentation. We
            specialize in delivering tailor-made software solutions that drive
            business success and help companies scale their operations with
            top-tier talent. By combining technical expertise with innovative
            solutions, we help our clients navigate the complexities of digital
            transformation with ease.
          </p>
          <div className={style.socialIcons}>
            <Link
              href="https://in.linkedin.com/company/brandsmashers-tech-pvt-ltd"
              className={style.socialIcon}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/brandsamsherstechnologies"
              className={style.socialIcon}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuFacebook />
            </Link>
            <Link
              href="https://clutch.co/profile/brandsmashers-tech"
              className={style.socialIcon}
              aria-label="clutch"
              target="_blank"
              rel="noopener noreferrer"
            >
              cl
            </Link>
            <Link
              href="https://youtube.com/@Brandsmashers"
              className={style.socialIcon}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutubekids />
            </Link>
            <Link
              href="https://www.instagram.com/brandsmashers_technologies/"
              className={style.socialIcon}
              aria-label="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </Link>
          </div>
        </div>

        <div className={style.footerLinks}>
          <div className={style.footerColumn}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <Link href="/Home#home-page">Home</Link>
              </li>
              <li>
                <Link href="/About#about-us">About</Link>
              </li>
              <li>
                <Link href="/Services#serviceHero">Services</Link>
              </li>
              <li>
                <Link href="/contactus#contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/partnership#partners">Our Partners</Link>
              </li>
            </ul>
          </div>
          <div className={style.footerColumn}>
            <h3>MORE TO EXPLORE</h3>
            <ul>
              <li>
                <Link href="Services#webdesign">Web design</Link>
              </li>
              <li>
                <Link href="Services#desktopWebDevelopment">
                  Desktop app development
                </Link>
              </li>
              <li>
                <Link href="Services#mobileAppDevelopment">
                  Mobile app development
                </Link>
              </li>
              <li>
                <Link href="Services#uiux">UI/UX</Link>
              </li>
              <li>
                <Link href="Services#aiml">AI/ML</Link>
              </li>
              <li>
                <Link href="Services#datadriven">Data Drive</Link>
              </li>
              <li>
                <Link href="Services#digitalMarketing">Digital marketing</Link>
              </li>
              <li>
                <Link href="Services#beyondBrowser">Beyond the browser</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.bottomFooter}>
        <div className={style.bottomFooterLinks}>
          <Link href="#">SITE MAP</Link>
          <Link href="/privacy">PRIVACY</Link>
          <Link href="#">TERMS</Link>
        </div>

        <div className={style.copyright}>
          © 2018 Brandsmashers Tech
          <button
            onClick={handleBackToTop}
            className={style.backToTop}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
