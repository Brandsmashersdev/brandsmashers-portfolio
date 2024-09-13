import Image from 'next/image';
import styles from '../../src/styles/Service/DigitalMarketing.module.css';
import machineLearning from '../../public/Service/machinLearning.png';
import blockchain from '../../public/Service/blockchain.png';
import ai from '../../public/Service/ai.png';
import iot from '../../public/Service/iot.png';
import QABox from './QABoxw';
import QABoxdigital from './QABoxdigital';

const DigitalMarketing = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1>Digital Marketing </h1>
            <h4>Grow your brand with tailored digital marketing strategies</h4>
            <p>
            At Brandsmashers, our digital marketing services start with a thorough analysis 
            of your market and audience to create personalised strategies that resonate with 
            your target demographic. We enhance your online presence through targeted SEO, 
            dynamic social media campaigns, and compelling content marketing. Our team 
            continuously monitors performance and adjusts strategies to maximise brand visibility,
             drive traffic, and deliver measurable growth for your business.
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
               <QABoxdigital />
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
