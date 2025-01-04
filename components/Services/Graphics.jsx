import Image from "next/image";
import styles from "../../src/styles/Service/Graphics.module.css";
import machineLearning from "../../public/Service/machinLearning.png";
import blockchain from "../../public/Service/blockchain.png";
import ai from "../../public/Service/ai.png";
import iot from "../../public/Service/iot.png";
// import webdev from '../../public/Service/webdev.png';
// import graphics from '../../public/Service/graphycs.png';
import QABox from "./QABoxw";
import QABoxg from "./QABoxg";

const WebDesign = () => {
  return (
    <div className={styles.container} id="desktopWebDevelopment">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h2>Desktop App Development</h2>
            <h4>
              Innovative Desktop App Development Solutions with the Best Desktop
              App Development Services
            </h4>
            <p className={styles.description}>
            Brandsmashers delivers tailored desktop applications designed to meet your specific needs. As a leader in Desktop App Development Services in Bhopal, we use advanced technologies to create high-performance apps with intuitive interfaces. Whether for multiplatform solutions or modern enterprise utilities, our developers ensure productivity-focused apps with robust security and user-friendly features. We prioritize creating effective, easy-to-navigate applications that enhance business operations and employee performance. Collaborating with you throughout the process, we ensure the final product meets both current and future needs. Choose Brandsmashers for innovative desktop applications that set you apart in today’s competitive market
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
            <QABoxg />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
