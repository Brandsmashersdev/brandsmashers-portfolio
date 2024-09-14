import Image from 'next/image';
import styles from '../../src/styles/Service/WebDesign.module.css';
// import machineLearning from '../../public/Service/machinLearning.png';
// import blockchain from '../../public/Service/blockchain.png';
import ai from '../../public/Service/ai.png';
import webl from '../../public/Service/webl.png'
// import iot from '../../public/Service/iot.png';
// import webdev from '../../public/Service/webdev.png';
import ui from '../../public/Service/Ui-ux.png';
import sd from '../../public/Service/sd.png';
import dataS from '../../public/Service/dataS.png'

import QABox from './QABoxw';
import QABoxw from './QABoxw';

const WebDesign = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h1>Web Design</h1>
            <h4>Create stunning, user-friendly websites that captivate and convert.</h4>
            <p>
            At Brandsmashers, we&apos;re more than just a web development agency.
           With years of expertise in Next.js and React.js, we&apos;ve successfully delivered projects 
           ranging from simple websites to complex, high-performance web applications. Our deep knowledge 
           of these technologies allows us to handle any challenge with confidence. Always staying ahead
            of the curve, we continuously monitor emerging trends and advancements to ensure your digital
             presence is cutting-edge and future-ready.

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
           <source src="/video/Web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>

            <div className={styles.qabox}>
               <QABoxw/>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default WebDesign;

