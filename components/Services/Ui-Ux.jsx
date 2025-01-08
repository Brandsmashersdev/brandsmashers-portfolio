import Image from "next/image";
import react from "../../public/Service/react.png";
import ios from "../../public/Service/ios.png";
import android from "../../public/Service/android.png";
import hybrid from "../../public/Service/hybrid.png";
import crossp from "../../public/Service/crossplateform.png";

import styles from "../../src/styles/Service/DataDive.module.css";
import QABoxui from "./QABoxm";
// import mobileApp from '../../public/Service/mobileApp.png';
// import Uiux from '../../public/Service/uiux.png';

const UiUXDesign = () => {
  return (
    <div className={styles.container} id="uiux">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="/video/uiux.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.qabox}>
            <QABoxui />
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h2>UI/UX </h2>
            <h4>Design intuitive interfaces that boost user satisfaction</h4>
            <p className={styles.description}>
            Craft stunning interfaces that enhance user satisfaction and drive success with Brandsmashers! As a leading provider of the Best UI/UX Design Services in Bhopal, we create visually appealing, intuitive, and functional interfaces. By closely collaborating with you, we identify target groups and behaviors, ensuring every touchpoint delivers exceptional usability. From rough concepts to detailed designs, we craft impactful digital interfaces that boost engagement, attract customers, and foster brand growth. Trust Brandsmashers to transform your ideas into designs that resonate with users and elevate your brand.
          
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
export default UiUXDesign;
