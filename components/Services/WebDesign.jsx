import Image from "next/image";
import styles from "../../src/styles/Service/WebDesign.module.css";

import ai from "../../public/Service/ai.png";
import webl from "../../public/Service/webl.png";

import ui from "../../public/Service/Ui-ux.png";
import sd from "../../public/Service/sd.png";
import dataS from "../../public/Service/dataS.png";

import QABox from "./QABoxw";
import QABoxw from "./QABoxw";

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
              We&apos;re a digital agency that offers you more than ordinary web
              development – we give you Infinitely Cutting-Edge experiences.
              Being the first web development company in Bhopal, we utilize more
              than ten years of experience in such technologies as Next.js and
              React.js to develop efficient websites. If it is question of a
              small scale solution or if it is question of a large scale, high
              performance application our depth of technical knowledge makes it
              certain that we get the job done right. We are specialized in
              responsive web design, progressive web apps, and complex user
              interfaces – everything with an emphasis on innovation and
              quality. In the same manner, we ensue that we get in touch with
              these trends so that your business is placed at the vanguard of
              any advancements in the social media marketing strategies. When
              you become our client, you are also betting on a solution that is
              going to be relevant in the present and in the years to come. Get
              your vision into existent with Brandsmashers – the best web
              development company in Bhopal, known for offering web development
              services that are contemporary.
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
            <QABoxw />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;
