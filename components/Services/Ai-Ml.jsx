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
              Leverage Advanced AI and ML for Actionable Insights and
              Innovation! The Brandsmashers team prides itself in the ability to
              offer innovative AI and ML solutions that can make a measurable
              distinctive change in your enterprise. Our services primarily
              include developing, implementing, and maintaining a number of AI
              and machine learning operational solutions to governmental
              organizations with the aim of predicting customer trends and
              improving resource management efficiency. We also back our core
              specialization in Machine Learning with a value proposition that
              drives tangible results for businesses. This is done to accumulate
              the advancement of the latest technologies in your business hence
              the cutting edge in today’s complexion digital world.
              <br />
              Select Brandsmashers when you’re in the need for professional
              AI/ML services, so you obtain the most significant benefits and
              enable model development. Please let us assist you in leveraging
              the enhanced technologies to support your business and even
              achieve your strategic goals!
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
