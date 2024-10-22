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
import style from "../../src/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.firstsection}>
        <div className={style.signupSection}>
          <h2>Don&apos;t Miss Out</h2>
          <p>
            Sign up for the latest beauty news, product samples, and coupons
          </p>

          <div className={style.formGroup}>
            <div className={style.inputGroup}>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={style.input}
              />
            </div>
            <div className={style.inputGroup}>
              <input
                type="text"
                placeholder="Enter your Name"
                className={style.input}
              />
            </div>
          </div>
          <div className={style.inputGroup}>
            <textarea
              name=""
              placeholder="Enter your Massage"
              rows={5}
              cols={50}
              id=""
              className={style.input}
            >
              Enter your Massage
            </textarea>
          </div>

          <button className={style.signupBtn}>Book A Call</button>

          <p className={style.legalText}>
            This site is intended for US consumers. By signing up, you
            understand and agree that your data will be collected and used
            subject to our US Privacy Policy and Terms of Use.
          </p>

          <div className={style.socialIcons}>
            <a href="#" className={style.socialIcon} aria-label="LinkedIn">
              in
            </a>
            <a href="#" className={style.socialIcon} aria-label="Facebook">
              fb
            </a>
            <a href="#" className={style.socialIcon} aria-label="Twitter">
              tw
            </a>
            <a href="#" className={style.socialIcon} aria-label="Tumblr">
              tu
            </a>
            <a href="#" className={style.socialIcon} aria-label="YouTube">
              yt
            </a>
            <a href="#" className={style.socialIcon} aria-label="Pinterest">
              pi
            </a>
          </div>
        </div>

        <div className={style.footerLinks}>
          <div className={style.footerColumn}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className={style.footerColumn}>
            <h3>CUSTOMER SERVICE</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={style.footerColumn}>
            <h3>MORE TO EXPLORE</h3>
            <ul>
              <li>
                <a href="#">Tools and Consultations</a>
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
