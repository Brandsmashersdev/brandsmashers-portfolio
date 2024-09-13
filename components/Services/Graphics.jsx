import Image from 'next/image';
import styles from '../../src/styles/Service/Graphics.module.css';
import machineLearning from '../../public/Service/machinLearning.png';
import blockchain from '../../public/Service/blockchain.png';
import ai from '../../public/Service/ai.png';
import iot from '../../public/Service/iot.png';
// import webdev from '../../public/Service/webdev.png';
// import graphics from '../../public/Service/graphycs.png';
import QABox from './QABoxw';
import QABoxg from './QABoxg';

const WebDesign = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1>Graphic Design</h1>
            <h4>Enhance your brand with impactful, visually striking designs</h4>
            <p>
            Step into a world where your brand’s identity comes to life with our full range of 
            graphic design services. At Brandsmashers, we are committed to enhancing your brand’s 
            presence through visually stunning designs that captivate and inspire. Whether you need a bold logo, 
            a comprehensive branding strategy, engaging web design,
             or eye-catching print materials, our expert designers are here to bring your vision to life.
            </p>
          </div>

          {/* Emerging Tech Icons Section */}
          <div className={styles.techIcons}>
            <div className={styles.slider}>
              <div className={styles.techItem}>
                <Image src={machineLearning} alt="Machine Learning" />
                <p>Machine Learning</p>
              </div>
              <div className={styles.techItem}>
                <Image src={blockchain} alt="Blockchain" />
                <p>Blockchain</p>
              </div>
              <div className={styles.techItem}>
                <Image src={ai} alt="AI" />
                <p>AI</p>
              </div>
              <div className={styles.techItem}>
                <Image src={iot} alt="IoT" />
                <p>IoT</p>
              </div>

              {/* Duplicate items for smooth scrolling */}
              <div className={styles.techItem}>
                <Image src={machineLearning} alt="Machine Learning" />
                <p>Machine Learning</p>
              </div>
              <div className={styles.techItem}>
                <Image src={blockchain} alt="Blockchain" />
                <p>Blockchain</p>
              </div>
              <div className={styles.techItem}>
                <Image src={ai} alt="AI" />
                <p>AI</p>
              </div>
              <div className={styles.techItem}>
                <Image src={iot} alt="IoT" />
                <p>IoT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
           <source src="/video/graphics.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
          
          <div className={styles.qabox}>
               <QABoxg/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
