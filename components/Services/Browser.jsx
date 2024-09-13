import Image from 'next/image';
import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';
import styles from '../../src/styles/Service/Browser.module.css';
import QABoxbrowser from './QABoxbrowser';

const Browser = () => {
    return(

      <div className={styles.container}>
      {/* Header Section */}
   <section className={styles.headerSection}>
      <div className={styles.leftSection}>
         
          <video autoPlay loop muted className={styles.backgroundVideo}>
           <source src="/video/browser.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>

          <div className={styles.qabox}>
               <QABoxbrowser/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>Beyond the Browser</h1>
            <h4>Innovate with applications and technologies that stand out</h4>
            <p>
            At Brandsmashers, we transcend conventional web solutions to offer groundbreaking digital
            experiences. Our services encompass the development of advanced applications and the 
            integration of innovative technologies, enhancing user interaction and optimising processes. 
            We specialise in crafting engaging and impactful digital solutions that elevate your brand and
             ensure a standout presence in the digital landscape.
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
export default Browser;