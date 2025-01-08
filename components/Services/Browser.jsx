import Image from "next/image";
import react from "../../public/Service/react.png";
import ios from "../../public/Service/ios.png";
import android from "../../public/Service/android.png";
import hybrid from "../../public/Service/hybrid.png";
import crossp from "../../public/Service/crossplateform.png";
import styles from "../../src/styles/Service/DataDive.module.css";
import QABoxbrowser from "./QABoxm";

const Browser = () => {
  return (
    <div className={styles.container} id="beyondBrowser">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="/video/browser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.qabox}>
            <QABoxbrowser />
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h2 className={styles.heading}>Beyond the Browser</h2>
            <h4>Innovate with Applications and Technologies That Stand Out!</h4>
            <p>
              At Brandsmashers our focus is shifted from simple website
              solutions to creating unique digital experiences that redefine
              your brand. Some of our services include creating new applications
              and incorporating new technologies that would help improve the
              interaction and effectiveness of processes. Being a
              technology-savvy company, we are focused on providing the best
              digital experiences to solve your business problems effectively.
              We are determined to make your brand shine and receive more
              attention among the numerous Internet users. Using up-to-date
              techniques, we ensure you capture the consumer&apos;s attention,
              evoke their emotions, and produce measurable outcomes. We at
              Brandsmashers are ready to bring your idea to life and help you
              become an unbeatable force on the online stage!
            </p>
          </div>

          {/* Emerging Tech Icons Section */}
          <div className={styles.techIcons}>
            <div className={styles.slider}>
              <div className={styles.techItem}>
                <Image src={react} alt="React" />
                <p>React</p>
              </div>
              <div className={styles.techItem}>
                <Image src={ios} alt="ios" />
                <p>IOS</p>
              </div>
              <div className={styles.techItem}>
                <Image src={android} alt="android" />
                <p>Android</p>
              </div>
              <div className={styles.techItem}>
                <Image src={hybrid} alt="hybrid" />
                <p>Hybrid</p>
              </div>
              <div className={styles.techItem}>
                <Image src={crossp} alt="cross platform" />
                <p>Cross Platform</p>
              </div>

              {/* Duplicate items for smooth scrolling */}
              <div className={styles.techItem}>
                <Image src={react} alt="react" />
                <p>React</p>
              </div>
              <div className={styles.techItem}>
                <Image src={ios} alt="ios" />
                <p>IOS</p>
              </div>
              <div className={styles.techItem}>
                <Image src={android} alt="android" />
                <p>Android</p>
              </div>
              <div className={styles.techItem}>
                <Image src={hybrid} alt="hybrid" />
                <p>Hybrid</p>
              </div>

              <div className={styles.techItem}>
                <Image src={crossp} alt="cross platform" />
                <p>Cross Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Browser;
