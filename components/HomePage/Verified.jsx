import styles from '../../src/styles/Hero/Verified.module.css';
import Image from 'next/image';
import branding from '../../public/Hero/brandings.png';
import website from '../../public/Hero/website.png';
import marketing from '../../public/Hero/marketing.png';
// import branding from '../../public/AboutUs/product.webp';
import software from '../../public/Hero/softwareApp.png';
import service from '../../public/Hero/service.png';
import business from '../../public/Hero/business.png'

const Verified = () => {
  return (
    <div className={styles.container}>
      <h1>View Verified Agencies by Service Categories Below</h1>
      <div className={styles.categories}>
        <div className={`${styles.category} ${styles.category1}`}>
          <div className={styles.categoryHeader}>
            <h3>Branding & Creative</h3>
            <Image src={branding} width={50}  height={50} alt="Lightbulb Icon" />
          </div>
          {/* <ul className={styles.ulList }> */}
          <ul className={`${styles.ulList} ${styles.hoverText} `}> 
            <li>Digital Agencies</li>
            <li>Branding Agencies</li>
            <li>Creative Agencies</li>
            <li>Product Design Companies</li>
            <li>Logo Design Companies</li>
            <li>Graphic Design Companies</li>
          </ul>
          <a href="#" className={styles.viewAll}>VIEW ALL</a>
        </div>

        <div className={`${styles.category} ${styles.category2} `}>
          <div className={styles.categoryHeader}>
            <h3>Website & Interface</h3>
            <Image src={website} width={100}  height={100} alt="Globe Icon" />
          </div>
          <ul className={styles.ulList} >
            <li>Web Design Companies</li>
            <li>eCommerce Development Companies</li>
            <li>Web Development Companies</li>
            <li>WordPress Web Design Companies</li>
            <li>WordPress Development Companies</li>
            <li>Magento Development Companies</li>
          </ul>
          <a href="#" className={styles.viewAll}>VIEW ALL</a>
        </div>

        <div className={`${styles.category} ${styles.category3}`}>
          <div className={styles.categoryHeader}>
            <h3>Marketing</h3>
            <Image src={marketing} width={100}  height={100} alt="Megaphone Icon" />
          </div>
          <ul className={styles.ulList}>
            <li>Digital Marketing Agencies</li>
            <li>SEO Agencies</li>
            <li>PPC Agencies</li>
            <li>Social Media Marketing Agencies</li>
            <li>Search Engine Marketing Agencies</li>
            <li>Email Marketing Agencies</li>
          </ul>
          <a href="#" className={styles.viewAll}>VIEW ALL</a>
        </div>

        <div className={`${styles.category} ${styles.category4}`}>
          <div className={styles.categoryHeader} >
            <h3>Software & App</h3>
            <Image src={software} width={100}  height={100} alt="Globe Icon" />
          </div>
          <ul className={styles.ulList} >
            <li>Software Development Companies</li>
            <li>Offshore Software Development Companies</li>
            <li>Outsourcing Software Development Companies</li>
            <li>Mobile App Development Companies</li>
            <li>VR & Augmented Reality Companies</li>
            <li>Ai Companies</li>
          </ul>
          <a href="#" className={styles.viewAll}>VIEW ALL</a>
        </div>

        <div className={`${styles.category} ${styles.category5}`}>
          <div className={styles.categoryHeader}>
            <h3>IT Service </h3>
            <Image src={service} alt="Globe Icon" />
          </div>
          <ul className={styles.ulList} >
            <li>IT Services Companies</li>
            <li>IT Outsourcing Companies</li>
            <li>Managed Service Providers</li>
            <li>Cybersecurity Companies</li>
            <li>Big Data Analytics Companies</li>
            <li>Cloud Consulting Companies</li>
          </ul>
          <a href="#" className={styles.viewAll}>VIEW ALL</a>
        </div>
        
        <div className={`${styles.category} ${styles.category6}`}>
          <div className={styles.categoryHeader}>
            <h3>IT Service </h3>
            <Image src={business} width={200} height={200} alt="Globe Icon" />
          </div>
          <ul className={styles.ulList} >
          <li>Business Consulting Firms</li>
            <li>Market Research Companies</li>
            <li>Call Center Companies</li>
            <li>BPO Companies</li>
            <li>Accounting Firms </li>
            <li>HR Outsourcing Companies</li>
          </ul>
          <a href="#" className={styles.viewAll}>VIEW ALL</a>
        </div>
    
        
      </div>
    </div>
  );
};

export default Verified;
