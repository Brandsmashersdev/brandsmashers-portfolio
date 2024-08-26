import styles from '@/styles/FeaturedSection.module.css';

const FeaturedSection = () => {
    return (
        <div className={styles.featuredSection}>
            <div className={styles.featuredLogos}>
                <h1>We Have been Featured On</h1>
                <div className={styles.logosContainer}>
                    <img src="/Hero/forbes.png" alt="Forbes" className={styles.logo} />
                    <img src="/Hero/fortune.png" alt="Fortune" className={styles.logo} />
                    <img src="/Hero/yahoo.png" alt="Yahoo" className={styles.logo} />
                    <img src="/Hero/aol.png" alt="AOL" className={styles.logo} />
                    <img src="/Hero/ani.png" alt="ANI" className={styles.logo} />
                    <img src="/Hero/yourstory.png" alt="YourStory" className={styles.logo} />
                </div>
            </div>
           
            <div className={styles.subFeaturedSection}>
                <div className={styles.featuredInfo}>
                    <div className={`${styles.infoBox} ${styles.firstBox}`}>
                        <div className={styles.icon}>⚡</div>
                        <h2 className={styles.subFeaturedTitle}>Faster</h2>
                        <p>Get top vetted profiles within 24-48 hours</p>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.icon}>💬</div>
                        <h2 className={styles.subFeaturedTitle}>Reliable</h2>
                        <p>Dedicated Account Manager just one email/WhatsApp away</p>
                    </div>
                    <div className={`${styles.infoBox} ${styles.thirdBox}`}>
                        <div className={styles.icon}>⭐⭐⭐⭐</div>
                        <h2 className={styles.subFeaturedTitle}>Trusted</h2>
                        <p>
                            4.6 Google<br />
                            4.4 Clutch<br />
                            4.8 G2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;
