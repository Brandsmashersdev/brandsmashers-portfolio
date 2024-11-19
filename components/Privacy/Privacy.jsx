import React from 'react';
import styles from '../../src/styles/Privacy/privacy.module.css';
import Link from "next/link";

const Privacy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainheading}>Privacy Policy</h1>
      <p className={styles.text}>Welcome to Brandsmashers Technologies! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website, services, or products.</p>

      <h2 className={styles.heading}>What Information Do We Collect?</h2>
      <p className={styles.text}>We may collect the following types of information:</p>
      <ul className={styles.list}>
        <li className={styles.lists}><strong>Personal Information:</strong> Such as your name, email address, phone number, and any details you provide when contacting us or filling out forms on our website.</li>
        <li className={styles.lists}><strong>Technical Information:</strong> Including your IP address, browser type, operating system, and device information.</li>
        <li className={styles.lists}><strong>Usage Data:</strong> Details of your visits to our website, such as pages viewed, time spent, and navigation patterns.</li>
        <li className={styles.lists}><strong>Payment Information:</strong> When purchasing our services, we may collect billing details and payment methods.</li>
        <li className={styles.lists}><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies, which enhance your browsing experience.</li>
      </ul>

      <h2 className={styles.heading}>How Do We Collect Information?</h2>
      <p className={styles.text}>We collect information in the following ways:</p>
      <ul className={styles.list}>
        <li className={styles.lists}><strong>Directly from You:</strong> When you fill out a contact form, subscribe to a newsletter, or communicate with us via email or phone.</li>
        <li  className={styles.lists}><strong>Automatically:</strong> Through cookies and other tracking technologies when you browse our website.</li>
        <li className={styles.lists}><strong>From Third Parties:</strong> Information may be provided by trusted service providers or partners that assist us in delivering our services.</li>
      </ul>

      <h2 className={styles.heading}>Confidentiality</h2>
      <p className={styles.text}>At Brandsmashers Technologies, your data is treated with the utmost confidentiality:</p>
      <ul className={styles.list}>
        <li className={styles.lists}>We implement strict security measures to prevent unauthorized access, disclosure, or loss of your data.</li>
        <li className={styles.lists}>Employees and service providers with access to your data are bound by confidentiality agreements.</li>
        <li className={styles.lists}>We will not share, sell, or rent your personal information to third parties, except as outlined in this policy or required by law.</li>
      </ul>

      <h2 className={styles.heading}>Making a Complaint</h2>
      <p className={styles.text}>If you believe that we have breached your privacy or handled your data improperly, you can make a complaint by contacting us. To file a complaint:</p>
      <ol className={styles.list}>
        <li className={styles.lists}>Contact our support team at <Link href="mailto:your-email@example.com">info@brandsmasher.com</Link> with the subject "Privacy Concern."</li>
        <li className={styles.lists}>Provide details about your concern and any relevant information.</li>
        <li className={styles.lists}>We will investigate your complaint and aim to respond within <strong>30 days</strong>.</li>
      </ol>
      <p className={styles.text}>If you are not satisfied with our response, you may escalate your complaint to a data protection authority in your region.</p>

      <h2 className={styles.heading}>Children's Privacy</h2>
      <p className={styles.text}>Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we discover that a child under 13 has provided us with personal information, we will take steps to delete it promptly.</p>

      <h2 className={styles.heading}>Contact Us</h2>
      <p className={styles.text}>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
      <address>
        <strong className={styles.texts}>Brandsmashers Technologies</strong><br />
        <li className={styles.lists}><span className={styles.spantexts}>Email: </span><Link href="mailto:info@brandsmasher.com">info@brandsmasher.com</Link></li>
        <li className={styles.lists}> <span  className={styles.spantexts}> Phone: </span> 7000863918</li>
        <li className={styles.lists}> <span  className={styles.spantexts}>Address: </span>2nd Floor, JAP Tower, Raisen Rd, Ward 44, Govindpura, Bhopal, Madhya Pradesh 462023</li>
      </address>
      <p className={styles.text}>Thank you for trusting Brandsmashers Technologies! Your privacy is our priority.</p>
    </div>
  );
};

export default Privacy;
