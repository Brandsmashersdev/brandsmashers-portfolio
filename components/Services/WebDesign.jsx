import Image from "next/image";
import styles from "../../src/styles/Service/Ai-Ml.module.css";

import ai from "../../public/Service/ai.png";
import webl from "../../public/Service/webl.png";

import ui from "../../public/Service/Ui-ux.png";
import sd from "../../public/Service/sd.png";
import dataS from "../../public/Service/dataS.png";

import QABox from "./QABoxw";
import QABoxw from "./QABoxm";

const WebDesign = () => {
  return (
    <div className={styles.container} id="webdesign">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <div className={styles.headerContent}>
            <h2>Web Design</h2>
            <h4>
              Create stunning, user-friendly websites that captivate and
              convert.
            </h4>
            <p className={styles.description}>
            At Brandsmashers, the Best Web Development Company in Bhopal, we create scalable, performance-focused websites with modular code adaptable to any device. We specialize in Custom Web Development, Responsive Web Design, and CMS like WordPress and Shopify. Our services include eCommerce Development, API Integrations, caching, CDN, and database optimization. We ensure security with SSL certificates and regular audits. Partner with us to bring your digital vision to life and drive long-term business growth
            </p>
          </div>

          {/* Emerging Tech Icons Section */}
            <div className={styles.techIcons}>
              <div className={styles.slider}>
                <div className={styles.techItem}>
                  <Image src={ui} alt="Blockchain" />
                  <p>UI-UX</p>
                </div>
                <div className={styles.techItem}>
                  <Image src={webl} alt="AI" />
                  <p>Web language</p>
                </div>
                <div className={styles.techItem}>
                  <Image src={sd} alt="IoT" />
                  <p>Software Development</p>
                </div>
                <div className={styles.techItem}>
                  <Image src={ai} alt="AI" />
                  <p>AI</p>
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
                <p>Software Development</p>
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
                <p>Software Development</p>
              </div>
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
                <p>Software Development</p>
              </div>
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
                  <p>Software Development</p>
                </div>
                <div className={styles.techItem}>
                  <Image src={ui} alt="Blockchain" />
                  <p>UI-UX</p>
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
            <QABoxw />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
