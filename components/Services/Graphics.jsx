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
              Brandsmashers is here to provide you with a set of powerful and
              unique desktop applications that correspond to your requirements.
              To be a leader in the most sought-after services – Best Desktop
              App Development Services in Bhopal – we use technologies and tools
              to make the apps perform at optimal levels while merging
              streamlined functionality with an intuitive, user interface.
              Regardless of whether you require a multiplatform app or an
              up-to-date enterprise utility app, our skillful developers
              guarantee a productivity-oriented desktop app, with safety
              measures integrated and simplicity for the end-users. Our main
              emphasis is placed on the conception and development of
              easy-to-navigate and effective applications that satisfy the
              necessities of your company and boost the performance of your
              workers. We engage with you until the final phases of development
              to ensure the desktop app that is created for you is optimal in
              each aspect, currently and in the future. Hire Brandsmashers to
              level up your business through creative and functional desktop
              applications that will surely make you stand out from the other
              competitors in the contemporary society.
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
            <QABoxg />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
