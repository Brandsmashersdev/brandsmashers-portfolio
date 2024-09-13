import Image from 'next/image';
import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';
import styles from '../../src/styles/Service/MobileApp.module.css';
// import mobileApp from '../../public/Service/mobileApp.png';
import QABoxm from './QABoxm';

const MobileApp = () => {
    return(

      <div className={styles.container}>
      {/* Header Section */}
   <section className={styles.headerSection}>
      <div className={styles.leftSection}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
           <source src="/video/mobile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
          
          <div className={styles.qabox}>
               <QABoxm/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>Mobile App </h1>
            <h4>Develop seamless, engaging mobile experiences.</h4>
            <p>
            At Brandsmashers, innovation intersects with mobility to deliver exceptional mobile 
            solutions that drive your business forward and exceed expectations. With a strong 
            focus on user-centric design and the latest technologies, we specialize in developing
             mobile apps that leave a lasting impact. Our passion lies in creating experiences that 
             not only meet your needs but also elevate your business to new heights.
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

    )
}
export default MobileApp;