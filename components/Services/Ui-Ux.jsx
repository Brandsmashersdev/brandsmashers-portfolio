

import Image from 'next/image';

import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';

import styles from '../../src/styles/Service/Ui-Ux.module.css'
import QABox from './QABox';
import mobileApp from '../../public/Service/mobileApp.png';
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
               <QABox/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>UI/UX </h1>
            <h4>Elevate Your Digital Experience: UI/UX Consultancy at Brandsmashers</h4>
            <p>
            Embark on a transformative journey with Brandsmashers' UI/UX Consultancy services.
            In the ever-evolving digital landscape, user interface and user experience are paramount 
            to innovation and success. We specialize in crafting seamless digital experiences that captivate
            audiences and drive tangible results.
            From website interfaces to mobile applications, our expert team combines industry best p...
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