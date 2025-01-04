import Image from "next/image";
import react from "../../public/Service/react.png";
import ios from "../../public/Service/ios.png";
import android from "../../public/Service/android.png";
import hybrid from "../../public/Service/hybrid.png";
import crossp from "../../public/Service/crossplateform.png";
import styles from "../../src/styles/Service/MobileApp.module.css";
// import mobileApp from '../../public/Service/mobileApp.png';
import QABoxm from "./QABoxm";

const MobileApp = () => {
  return (
    <div className={styles.container} id="mobileAppDevelopment">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="/video/mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.qabox}>
            <QABoxm />
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h2 className={styles.heading}>Mobile App </h2>
            <h4>
              Develop Seamless, Engaging Mobile Experiences with Custom Mobile
              App Development Services
            </h4>
            <p className={styles.description}>
            At Brandsmashers, where innovation meets mobility, we create mobile solutions that drive business growth and set higher standards. Our Custom Mobile App Development Services in Bhopal deliver responsive, unique apps tailored to targeted platforms, combining exceptional user experiences with modern technologies. From simple apps to feature-rich products, we offer a full range of services to meet diverse business needs. We design solutions that engage users, ensure seamless navigation, and align businesses with modern demands. Partnering with Brandsmashers means transforming ideas into robust mobile apps that help your business thrive.

           

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
export default MobileApp;
