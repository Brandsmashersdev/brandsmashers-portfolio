import Image from 'next/image';
import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';
import datasecurity from '../../public/Service/datasecurity.png';
import styles from '../../src/styles/Service/MobileApp.module.css';
import QABox from './QABox';

const DataDive = () => {
    return(

      <div className={styles.container}>
      {/* Header Section */}
     <section className={styles.headerSection}>
      <div className={styles.leftSection}>
         <video autoPlay loop muted className={styles.backgroundVideo}>
           <source src="/video/datadive.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
          <div className={styles.qabox}>
               <QABox/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>Data Dive</h1>
            <h4>Exploring Insights Through Analysis</h4>
            <p>
            Dive deep into the wealth of information at your fingertips with our expert 
            data scientist development services. At Brandsmashers, we're committed to unlocking the 
            full potential of your data, transforming raw information into valuable insights that drive 
            informed decisions and propel your business to new heights.
             From initial data collection to advanced analytics, our team of dedicated ...
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

    )
}
export default  DataDive;