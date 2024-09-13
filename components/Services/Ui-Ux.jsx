import Image from 'next/image';
import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';

import styles from '../../src/styles/Service/Ui-Ux.module.css'
import QABoxui from './QABoxui';
// import mobileApp from '../../public/Service/mobileApp.png';
// import Uiux from '../../public/Service/uiux.png';


const UiUXDesign = () => {
    return(

      <div className={styles.container}>
      {/* Header Section */}
   <section className={styles.headerSection}>
      <div className={styles.leftSection}>
         
         <video autoPlay loop muted className={styles.backgroundVideo}>
           <source src="/video/uiux.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>

          <div className={styles.qabox}>
               <QABoxui/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>UI/UX </h1>
            <h4>Design intuitive interfaces that boost user satisfaction</h4>
            <p>
            At Brandsmashers, we believe that exceptional user experiences are at the heart of every
             successful product. Our UI/UX design services are focused on creating intuitive, engaging, 
             and visually striking interfaces that not only look great but function seamlessly. 
             We work closely with you to understand your users' needs and behaviours, ensuring that 
             every touchpoint is optimised for maximum usability and satisfaction. From wireframes and 
             prototypes to fully interactive designs,
             we craft digital experiences that leave a lasting impression and drive business growth.
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
export default UiUXDesign;