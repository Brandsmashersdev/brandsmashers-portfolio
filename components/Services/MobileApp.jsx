import Image from 'next/image';
import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';
import styles from '../../src/styles/Service/MobileApp.module.css';
import mobileApp from '../../public/Service/mobileApp.png';
import QABox from './QABox';

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
               <QABox/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>Mobile App </h1>
            <h4>Mobile App Development is the trending Part of Industry</h4>
            <p>
            Welcome to BrandSmashers, your premier destination where innovation intersects with mobility.
             We're passionate about crafting mobile solutions that propel your business forward and 
             surpass your wildest expectations. With an unwavering commitment to user-centric design
             and leveraging cutting-edge technology, we specialize in developing mobile apps that make 
             a lasting impact. In the curren
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