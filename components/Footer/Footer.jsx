import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import styles from '../../src/styles/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.companyInfo}>
          <img src="/Logo/BRANDSMASHERS (9).png" alt="Company Logo" className={styles.logo} />
          <p>
          Founded in 2018, Brandsmashers has rapidly expanded its reach with clients across multiple industries. We provide a comprehensive suite of IT services and tailored solutions to businesses worldwide, specialising in over 20 domains.
          </p>
        </div>
        

        <div className={styles.offerings}>
          <h4>OFFERINGS</h4>
          <ul>
            <li>Product Prototyping</li>
            <li>Design Engineering</li>
            <li>Software Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Front End Development</li>
            <li>Microsoft Development</li>
            <li>Remote Teams</li>
            <li>Data Engineering</li>
            <li>Cloud & Infrastructure</li>
            <li>Cybersecurity</li>
          </ul>
        </div>

        <div className={styles.company}>
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Alliances</li>
            <li>Celebrations</li>
            <li>Awards</li>
            <li>CSR</li>
            <li>Career</li>
          </ul>
        </div>

        <div className={styles.locations}>
          <h4>GLOBAL LOCATIONS</h4>
          <p>INDIA</p>
          <p>Madhya Pradesh:</p>
          <p>Floor 2, JAP Tower, Govindpura, Raisen Road, Bhopal - 462023</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        {/* <div className={styles.certifications}>
          <img src="/cmmi.png" alt="CMMI Certification" className={styles.certificationLogo} />
          <img src="/microsoft.png" alt="Microsoft Certification" className={styles.certificationLogo} />
        </div> */}

        <div className={styles.socialLinks}>
        <Link href="#">
            <FaFacebookF className={styles.socialIcon} />
          </Link>
          <Link href="#">
            <FaLinkedinIn className={styles.socialIcon} />
          </Link>
          <Link href="#">
            <FaTwitter className={styles.socialIcon} />
          </Link>
          {/* <Link href="#">
            <FaYoutube className={styles.socialIcon} />
          </Link> */}
          <Link href="#">
            <FaInstagram className={styles.socialIcon} />
          </Link>
        </div>

        <div>
        <p>&copy; 2003-2024 Brandsmashers All rights reserved.</p>
        </div>

        <div className={styles.legalLinks}>
          <p>
            <Link href="#">Privacy Policy</Link> | 
            <Link href="#">Terms of Use</Link> | 
            {/* <Link href="#">FAQ</Link> |  */}
            <Link href="#">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
