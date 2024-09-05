import styles from '../../src/styles/Hero/WhyBrandsmashers.module.css';
import cardslid from '../../public/Hero/cardslid.png';
import Image from 'next/image';
import googleLogo from '../../public/Hero/googles-removebg-preview.png'
import clutchLogo from '../../public/Hero/clutchs.png'
import gLogo from '../../public/Hero/g.png'
import user from '../../public/Hero/img1.png'
import download from '../../public/Hero/backgroundimages.png'
import professionalImage from '../../public/Hero/Professional.png'
import Card from '../HireDevelopers/Card';

const WhyBrandsmashers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <h2 className={styles.heading}>Why Brandsmashers?</h2>
                <p className={styles.paragraph}>
                Brandsmashers streamlines your recruitment process, eliminating 
                unnecessary steps, and providing you with top-tier software developers or entire teams 
                tailored to your needs, faster and more efficiently.
                </p>

      <div className={styles.statsSection}>
        <div className={styles.statsRow}>
          <button className={styles.contactButton}>Contact Us</button>
          <Image 
            src={user} 
            alt="Top Developers" 
            className={styles.statsImage} 
            width={500} 
            height={500} 
          />
          <span className={styles.statsText}>+100k top developers<br></br> available for hire</span>
        </div>
      </div>
              
               
                
    <div  className={styles.ratingSection}>      
         <div className={styles.reviews}>
            <span>  ⭐⭐⭐⭐⭐ <span className={styles.spanNumber}>20,000+ reviews</span></span>
           </div> 
          

    <div className={styles.logoSection}>
      <div className={styles.logos}>
        <Image src={googleLogo} alt="Google" width={60} height={60} />
        <Image src={clutchLogo} alt="Clutch" width={60} height={60} />
        <Image src={gLogo} alt="G2" width={40} height={40}  className={styles.glogo}/>
     </div>
       
      <div className={styles.buttonWrapper}>
        <p className={styles.googleButton}>
          <Image src={googleLogo} alt="Google" width={30} height={30} className={styles.textGoogle} />
          <span className={styles.spanText}>Startups Accelerator: AI First 2024</span>
        </p>
      </div>
         </div>
    </div> 
      
 </div>  
         

    
     
    
    <div className={styles.rightSection}>
    
  <div className={styles.bgImage}>
  <div className={styles.imageContainer}>
    <Image 
      src={download} 
      alt="Top Developers" 
      className={styles.backgroundImage} 
    />
    </div>
  </div>
  <div className={styles.cardContainer}>
    <Card className={styles.cardslid} />
    </div>
</div>

        
      </div>
    );
};

export default WhyBrandsmashers;
