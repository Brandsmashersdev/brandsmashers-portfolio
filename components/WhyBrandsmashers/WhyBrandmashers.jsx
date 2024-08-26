import styles from '../../src/styles/Hero/WhyBrandsmashers.module.css';
import image from '../../public/Hero/img1.png';
import Image from 'next/image';
import googleLogo from '../../public/Hero/googlelogo.png'
import clutchLogo from '../../public/Hero/clutch.png'
import gLogo from '../../public/Hero/g.png'
import download from '../../public/Hero/download.png'

const WhyBrandsmashers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h2 className={styles.heading}>Why Brandsmashers anyway?</h2>
                <p className={styles.paragraph}>
                    Supersourcing is an AI recruitment platform that helps you skip CV screening
                    and tedious interview rounds, and save up to 90% time by either hiring a
                    software engineer or your entire engineering team with us.
                </p>
               
                <div className={styles.stats}>
                <button className={styles.contactButton}>Contact Us</button>
                   <div className={styles.statsImage}>
                    <Image src={image} alt="Users" className={styles}
                     width={50} 
                     height={50}/>
                   </div>
                    +100K top developers available for hire
                </div>
                <div className={styles.reviews}>
                    <span>⭐⭐⭐⭐⭐ 20,000+ reviews</span>
                 </div> 
                 <div className={styles.logos}>  
                    <Image src={googleLogo} alt="Google"  width={50} height={50}   className={styles.logos}/>
                    <Image src={clutchLogo} alt="Clutch" width={50} height={50}  className={styles.logos} />
                    <Image src={gLogo} alt="Clutch" width={50} height={50}  className={styles.logos}/>
               
                <div className={styles.googleTag}>
                    <button className={styles.buttonGoogle}>
                  <Image src={googleLogo} alt="Google"  width={20} height={20} className={styles.logos}/>
                   <span>Startups Accelerator: AI First 2024 </span></button>
                </div>
                </div>
            </div>

            <div className={styles.rightSection}>
            <div className={styles.backgroundImage}>
                     
           
                <div className={styles.profiles}>
                    <div className={styles.profile}>
                        <span>Shruti Singh</span>
                        <span>Sr. Python Developer</span>
                    </div>
                    <div className={styles.profile}>
                        <span>Karan Sharma</span>
                        <span>Sr. Salesforce Developer</span>
                    </div>
                    <div className={styles.profile}>
                        <span>Amit Jain</span>
                        <span>Sr. Full Stack Developer</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBrandsmashers;
