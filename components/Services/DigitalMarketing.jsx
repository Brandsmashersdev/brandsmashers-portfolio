import Image from 'next/image';
import styles from '../../src/styles/Service/DigitalMarketing.module.css';
import machineLearning from '../../public/Service/machinLearning.png';
import blockchain from '../../public/Service/blockchain.png';
import ai from '../../public/Service/ai.png';
import iot from '../../public/Service/iot.png';
import QABox from './QABox';

const DigitalMarketing = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1>Digital Marketing </h1>
            <h4>Unlocking Intelligence: AI/ML Solutions for Tomorrow</h4>
            <p>
            Brandsmashers leads the charge in delivering AI/ML solutions that yield tangible, 
            transformative results for your business. Whether it's streamlining operations,
            foreseeing customer behaviors, or optimizing resource allocation,
            we're dedicated to driving measurable outcomes that propel your organization forward.
            Our AI/ML expertise, paired with cutting-edge technologies, ensures that you... 
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
           <source src="/video/digital.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
            <div className={styles.qabox}>
               <QABox />
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
