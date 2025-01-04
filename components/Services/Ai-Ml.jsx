import Image from "next/image";
import styles from "../../src/styles/Service/Ai-Ml.module.css";
import machineLearning from "../../public/Service/machinLearning.png";
import blockchain from "../../public/Service/blockchain.png";
import ai from "../../public/Service/ai.png";
import iot from "../../public/Service/iot.png";
import QABoxai from "./QABoxai";

const AiMl = () => {
  return (
    <div className={styles.container} id="aiml">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h2>AI/ML </h2>
            <h4>
              Leverage advanced AI and ML for actionable insights and innovation
            </h4>
            <p className={styles.description}>
            Leverage Advanced AI and ML for Actionable Insights and Innovation! The Brandsmashers team offers innovative AI and ML solutions that create measurable change in your enterprise. We specialize in developing, implementing,
             and maintaining AI and machine learning solutions for government organizations, focusing on predicting customer trends and improving resource management.
              Our core expertise in Machine Learning drives tangible results for businesses, incorporating the latest technologies to keep you ahead in today’s digital world. 
              Choose Brandsmashers for professional AI/ML services and let us help you achieve your strategic goals with enhanced technologies.
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
            <source src="/video/machin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.qabox}>
            <QABoxai />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiMl;
