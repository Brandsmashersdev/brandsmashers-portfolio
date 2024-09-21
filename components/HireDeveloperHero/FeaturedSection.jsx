import Image from 'next/image';
import styles from '@/styles/HireDevelopers/FeaturedSection.module.css';

const FeaturedSection = () => {
    return (
        <div className={styles.featuredSection}>
            <div className={styles.featuredLogos}>
                <h1>We Have been Featured On</h1>
                <div className={styles.logosContainer}>
                    <Image src="/Hero/forbes.png" alt="Forbes" width={150} height={50} className={styles.logo} />
                    <Image src="/Hero/fortune.png" alt="Fortune" width={150} height={50} className={styles.logo} />
                    <Image src="/Hero/yahoo.png" alt="Yahoo" width={150} height={50} className={styles.logo} />
                    <Image src="/Hero/aol.png" alt="AOL" width={150} height={50} className={styles.logo} />
                    <Image src="/Hero/ani.png" alt="ANI" width={150} height={50} className={styles.logo} />
                    <Image src="/Hero/yourstory.png" alt="YourStory" width={150} height={50} className={styles.logo} />
                </div>
            </div>
           
            <div className={styles.subFeaturedSection}>
                <div className={styles.featuredInfo}>
                    <div className={`${styles.infoBox} ${styles.firstBox}`}>
                        <div className={styles.icon}>⚡</div>
                        <h2 className={styles.subFeaturedTitle}>Speed</h2>
                        <p>Quick turnarounds and efficient hiring solutions.</p>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.icon}>💬</div>
                        <h2 className={styles.subFeaturedTitle}>Dependability</h2>
                        <p>Consistent and trustworthy results.</p>
                    </div>
                    <div className={`${styles.infoBox} ${styles.thirdBox}`}>
                        <div className={styles.icon}>⭐⭐⭐⭐⭐</div>
                        <h2 className={styles.subFeaturedTitle}>Credibility</h2>
                        <p>Recognized and endorsed by leading industry sources.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;
