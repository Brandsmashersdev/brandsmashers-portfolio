import styles from '../../src/styles/Hero/WhyBrandsmashers.module.css';
import cardslid from '../../public/Hero/cardslid.png';
import Image from 'next/image';
import googleLogo from '../../public/Hero/googles.png'
import clutchLogo from '../../public/Hero/clutchs.png'
import gLogo from '../../public/Hero/g.png'
import user from '../../public/Hero/img1.png'
import download from '../../public/download.png'
import Card from './Card';

const WhyBrandsmashers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h2 className={styles.heading}>Why Brandsmashers?</h2>
                <p className={styles.paragraph}>
                Brandsmashers streamlines your recruitment process, eliminating 
                unnecessary steps,<br></br> and providing you with top-tier software developers or entire teams 
                tailored to your<br></br> needs, faster and more efficiently.
                </p>

                  <div className={styles.statsSection}>
                    <button className={styles.contactButton}>Contact Us</button>
                       {/* <Image src={user} alt="Top Developers" className={styles.statsImage}
                         width={50} height={50} /> */}
                        <span className={styles.statsText}>+100k top developers available for hire</span>
                    </div>
               
               
                <div className={styles.reviews}>
                    <span>⭐⭐⭐⭐⭐  <span className={styles.spanNumber}>20,000+ reviews</span></span>
                </div> 
                 
                <div className={styles.logoSction}>
                 <div className={styles.logos}>  
                    <Image src={googleLogo} alt="Google"  width={60} height={60}   />
                    <Image src={clutchLogo} alt="Clutch" width={60} height={60}   />
                    <Image src={gLogo} alt="Clutch" width={50} height={50} className={styles.logoss}/>
               
                
                <    button className={styles.googleButton}> 
                     <Image src={googleLogo} alt="Google"  width={50} height={50} className={styles.textgoogle}/>
                     <p className={styles.spanText}>Startups Accelerator: AI First 2024</p>
                     </button>
                   
                </div>
                </div>
            </div>

            
          <div className={styles.rightSection}>
          <Card className={styles.cardslid}/>
            
         </div>
        </div>
    );
};

export default WhyBrandsmashers;
