
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
  return (
    <footer className={style.footerContainer}>
      <div className={style.firstsection}>
        <div className={style.signupSection}>
          <Image src={logo} alt={"footer logo"} width={150} />

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
            >
              <LuLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/brandsamsherstechnologies"
              className={style.socialIcon}
              aria-label="Facebook"
            >
              <LuFacebook />
            </Link>
            <Link
              href="https://clutch.co/profile/brandsmashers-tech"
              className={style.socialIcon}
              aria-label="clutch"
            >
              cl
            </Link>
            <Link
              href="https://youtube.com/@Brandsmashers"
              className={style.socialIcon}
              aria-label="YouTube"
            >
              <SiYoutubekids />
            </Link>
            <Link
              href="https://www.instagram.com/brandsmashers_technologies/"
              className={style.socialIcon}
              aria-label="instagram"
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
                <Link href="/Home">Home</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link href="/partnership">Our Partners</Link>
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
                {" "}
                <Link href="Services#desktopWebDevelopment">
                  Desktop app development
                </Link>
              </li>
              <li>
                {" "}
                <Link href="Services#mobileAppDevelopment">
                  Mobile app development
                </Link>
              </li>
              <li>
                {" "}
                <Link href="Services#uiux">UI/UX</Link>
              </li>
              <li>
                <Link href="Services#aiml">AI/ML</Link>
              </li>
              <li>
                {" "}
                <Link href="Services#datadriven">Data Drive</Link>
              </li>
              <li>
                {" "}
                <Link href="Services#digitalMarketing">Digital marketing</Link>
              </li>
              <li>
                {" "}
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
          <Link href="#" className={style.backToTop}>
            BACK TO TOP ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
