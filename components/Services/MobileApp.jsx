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
              At Brandsmashers – where innovation meets mobility- we strive to
              produce mobile solutions that will help enhance the growth of your
              business and set higher standards. With Custom Mobile App
              Development Services in Bhopal offered to our clients, we combine
              good user experience with the use of modern technologies in order
              to create distinct mobile apps that are responsive within the
              targeted platforms. We offer a full range of services, from the
              simplest line-oriented application to a highly functional,
              attractive, and feature-wise product to meet the requirements of
              each individual business. We are not only striving for
              practicality but rather looking to design mobile solutions that
              will not only engage your users and allow them to navigate with
              ease through your app or website. Thus, relying on our knowledge
              of mobile development, we not only align companies with the modern
              environment but also provide them with the tools to succeed in a
              very competitive environment. With Brandsmashers you don’t only
              choose your development team, you choose a partner who will strive
              on making your business succeed. and enable you to make your ideas
              turn into reality by bringing you a robust, bespoke mobile app
              solution that adds exclusivity to your brand.
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
