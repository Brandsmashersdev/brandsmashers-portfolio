import Image from "next/image";
import styles from "../../src/styles/Service/DigitalMarketing.module.css";
import machineLearning from "../../public/Service/machinLearning.png";
import blockchain from "../../public/Service/blockchain.png";
import ai from "../../public/Service/ai.png";
import iot from "../../public/Service/iot.png";
import QABox from "./QABoxw";
import QABoxdigital from "./QABoxdigital";

const DigitalMarketing = () => {
  return (
    <div className={styles.container} id="digitalMarketing">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h2>Digital Marketing </h2>
            <h4>Grow Your Brand with Tailored Digital Marketing Strategies!</h4>
            <p>
              At Brandsmashers, the Best Digital Marketing Agency in Bhopal, we
              start our digital marketing strategies by understanding your
              market and your consumers for the most tailored promo setups. It
              provides you with the complete solutions through effective Search
              Engine Optimization, engaging Social Media Management, and
              effective and interesting Content Marketing. Our team also
              understands that digital marketing should be a constant evolution
              process, so, we closely supervise the existing strategies in order
              to optimize results. This zeal to deliver growth helps guarantee
              not only the growth of your business but the differentiation of
              same in a competitive environment. Try Brandsmashers to boost your
              internet marketing approach and get spectacular
              change for your brand!
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
            <source src="/video/digital.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.qabox}>
            <QABoxdigital />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
