import Image from 'next/image';
import react from '../../public/Service/react.png';
import ios from '../../public/Service/ios.png';
import android from '../../public/Service/android.png';
import hybrid from '../../public/Service/hybrid.png';
import crossp from '../../public/Service/crossplateform.png';
import styles from '../../src/styles/Service/Browser.module.css';
import QABox from './QABox';

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
               <QABox/>
          </div>
        </div>
       
       {/* right section */}
        <div className={styles.rightSection}>
          <div className={styles.headerContent}>
            <h1>Beyond the Browser</h1>
            <h4>Elevating User Experiences with Desktop Apps</h4>
            <p>
            At Brandsmashers, we believe in delivering solutions that are as unique as your business. 
            Our custom desktop applications are meticulously crafted to cater to your specific needs.
             Whether you're looking to automate complex workflows, enhance your data analysis capabilities, 
             or develop a proprietary tool to gain a competitive edge,
             we have the expertise to turn your vision into reality. ...
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