import Image from 'next/image';
import styles from '../../src/styles/Service/WebDesign.module.css';
import machineLearning from '../../public/Service/machinLearning.png';
import blockchain from '../../public/Service/blockchain.png';
import ai from '../../public/Service/ai.png';
import webl from '../../public/Service/webl.png'
import iot from '../../public/Service/iot.png';
import webdev from '../../public/Service/webdev.png';
import ui from '../../public/Service/Ui-ux.png';
import sd from '../../public/Service/sd.png';
import dataS from '../../public/Service/dataS.png'

import QABox from './QABox';

const WebDesign = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1>Web Design</h1>
            <h4>Welcome to the digital hub where innovation meets excellence</h4>
            <p>
              We are not just another web development agency. Our team at BrandSmashers has been working with
              Next.js and React.js for years. We have tackled all sorts of projects, from simple websites to
              complex web applications. You can trust us to know these technologies inside and out, so we can
              handle whatever comes our way. We are always keeping an eye on the latest trends and technologies.
            </p>
          </div>

          {/* Emerging Tech Icons Section */}
          <div className={styles.techIcons}>
            <div className={styles.slider}>
              
              <div className={styles.techItem}>
                <Image src={ ui } alt="Blockchain" />
                <p>UI-UX</p>
              </div>
              <div className={styles.techItem}>
                <Image src={ webl} alt="AI" />
                <p>Web language</p>
              </div>
              <div className={styles.techItem}>
                <Image src={sd} alt="IoT" />
                <p>Seoftware Development</p>
              </div>

              {/* Duplicate items for smooth scrolling */}
            
              <div className={styles.techItem}>
                <Image src={dataS} alt="Blockchain" />
                <p>Data Sync</p>
              </div>
              <div className={styles.techItem}>
                <Image src={ai} alt="AI" />
                <p>AI</p>
              </div>
              <div className={styles.techItem}>
                <Image src={sd} alt="IoT" />
                <p>Seoftware Development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
              
         
          <video autoPlay loop muted className={styles.backgroundVideo}>
           <source src="/video/webDesign.mp4" type="video/mp4" />
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

export default WebDesign;

