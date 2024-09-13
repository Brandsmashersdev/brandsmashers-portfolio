import Image from 'next/image';
import styles from '../../src/styles/Service/Ai-Ml.module.css';
import machineLearning from '../../public/Service/machinLearning.png';
import blockchain from '../../public/Service/blockchain.png';
import ai from '../../public/Service/ai.png';
import iot from '../../public/Service/iot.png';
import QABoxai from './QABoxai';

const AiMl = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1>AI/ML </h1>
            <h4>Leverage advanced AI and ML for actionable insights and innovation</h4>
            <p>
            Brandsmashers is at the forefront of providing AI and ML solutions that 
            deliver impactful, transformative results for your business. From streamlining 
            operations and predicting customer behaviours to optimising resource allocation,
            we are committed to achieving measurable outcomes that advance your organisation. 
            Our expertise in AI and ML, combined with the latest technologies, 
            ensures you stay ahead of the curve.
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
