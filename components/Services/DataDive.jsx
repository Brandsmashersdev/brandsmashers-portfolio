import Image from "next/image";
import react from "../../public/Service/react.png";
import ios from "../../public/Service/ios.png";
import android from "../../public/Service/android.png";
import hybrid from "../../public/Service/hybrid.png";
import crossp from "../../public/Service/crossplateform.png";
import datasecurity from "../../public/Service/datasecurity.png";
import styles from "../../src/styles/Service/MobileApp.module.css";
import QABoxdata from "./QABoxdata";

const DataDive = () => {
  return (
    <div className={styles.container} id="datadriven">
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.leftSection}>
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="/video/datadive.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.qabox}>
            <QABoxdata />
          </div>
        </div>

        {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
          <h2 className={styles.heading}>Data Dive </h2>
          <h4>Transform data into valuable insights with expert analysis</h4>
            <p>
            Unlock the full potential of your data with Brandsmashers' specialized Data Science Development Services. We are dedicated to transforming raw data into actionable insights that drive strategic decisions and accelerate business growth.
Our services encompass every stage of the data lifecycle, from meticulous data collection to advanced analytics and visualization. Our team of skilled professionals leverages cutting-edge tools and techniques to deliver tailored solutions that maximize the value of your data.
Whether you need predictive analytics, machine learning models, or business intelligence dashboards, we ensure that your data becomes a powerful asset for your organization. By uncovering hidden patterns and trends, we empower you to make informed decisions, optimize processes, and stay ahead of the competition.

            </p>
          </div>

          {/* Emerging Tech Icons Section */}
          <div className={styles.techIcons}>
            <div className={styles.slider}>
              <div className={styles.techItem}>
                <Image src={datasecurity} alt="React" />
                <p>Data Security</p>
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
                <Image src={datasecurity} alt="react" />
                <p>Data Security</p>
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
export default DataDive;
