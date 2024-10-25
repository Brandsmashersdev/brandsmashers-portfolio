// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
// import style from '../../src/style/Footer.module.css';

// const Footer = () => {
//   return (
//     <footer className={style.footer}>
//       <div className={style.container}>
//         <div className={style.companyInfo}>
//           <Image
//             src="/Logo/BRANDSMASHERS (9).png"
//             alt="Company Logo"
//             width={200}
//             height={100}
//             className={style.logo}
//           />
//           <p>
//           Founded in 2018, Brandsmashers has rapidly expanded its reach with clients across multiple industries. We provide a comprehensive suite of IT services and tailored solutions to businesses worldwide, specialising in over 20 domains.
//           </p>
//         </div>

//         <div className={style.offerings}>
//           <h4>OFFERINGS</h4>
//           <ul>
//             <li>Product Prototyping</li>
//             <li>Design Engineering</li>
//             <li>Software Development</li>
//             <li>Web Application Development</li>
//             <li>Mobile App Development</li>
//             <li>Front End Development</li>
//             <li>Microsoft Development</li>
//             <li>Remote Teams</li>
//             <li>Data Engineering</li>
//             <li>Cloud & Infrastructure</li>
//             <li>Cybersecurity</li>
//           </ul>
//         </div>

//         <div className={style.company}>
//           <h4>COMPANY</h4>
//           <ul>
//             <li>About Us</li>
//             <li>Our Team</li>
//             <li>Alliances</li>
//             <li>Celebrations</li>
//             <li>Awards</li>
//             <li>CSR</li>
//             <li>Career</li>
//           </ul>
//         </div>

//         <div className={style.locations}>
//           <h4>GLOBAL LOCATIONS</h4>
//           <p>INDIA</p>
//           <p>Madhya Pradesh:</p>
//           <p>Floor 2, JAP Tower, Govindpura, Raisen Road, Bhopal - 462023</p>
//         </div>
//       </div>

//       <div className={style.footerBottom}>

//         <div className={style.socialLinks}>
//           <Link href="#">
//             <FaFacebookF className={style.socialIcon} />
//           </Link>
//           <Link href="#">
//             <FaLinkedinIn className={style.socialIcon} />
//           </Link>
//           <Link href="#">
//             <FaTwitter className={style.socialIcon} />
//           </Link>

//           <Link href="#">
//             <FaInstagram className={style.socialIcon} />
//           </Link>
//         </div>

//         <div>
//           <p>&copy; 2003-2024 Brandsmashers All rights reserved.</p>
//         </div>

//         <div className={style.legalLinks}>
//           <p>
//             <Link href="#">Privacy Policy</Link> |
//             <Link href="#">Terms of Use</Link> |

//             <Link href="#">Sitemap</Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
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
          <a href="#">SITE MAP</a>
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
        </div>
        <div className={style.copyright}>
          © 2018 Brandsmashers Tech -
          <a href="#" className={style.backToTop}>
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
