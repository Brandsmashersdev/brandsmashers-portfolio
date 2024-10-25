import Image from "next/image";
import react from "../../public/Service/react.png";
import ios from "../../public/Service/ios.png";
import android from "../../public/Service/android.png";
import hybrid from "../../public/Service/hybrid.png";
import crossp from "../../public/Service/crossplateform.png";

import styles from "../../src/styles/Service/Ui-Ux.module.css";
import QABoxui from "./QABoxui";
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
            <h1>UI/UX </h1>
            <h4>Design intuitive interfaces that boost user satisfaction</h4>
            <p className={styles.description}>
              Craft Stunning Interfaces That Elevate User Satisfaction and Drive
              Success! As a team at Brandsmashers, we comprehend the fact that
              each product indeed to hit the market ought to offer great user
              experiences. Being the most popular provider of the Best UI/UX
              Design Services in Bhopal, the mission we aim at is to design
              interfaces that are not only attractive but also comprehensible
              and functional. In co-operation with you, our team identifies
              major target groups and their behaviors and for every touch point
              we strive for outstanding usability and satisfaction. Whether your
              concept is on paper in the form of a sketch or a sketch on the
              screen and in code, we know that designing digital interfaces that
              make an impact matters. Due to the focus on users and their needs,
              UX design can always boost the level of interest and development
              of ways to bring in more customers. Hand your concepts over to
              Trust Brandsmashers and get interfaces developed that your user
              base would appreciate as well as ensure the growth of your brand
              in the highly competitive marketplace!
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
