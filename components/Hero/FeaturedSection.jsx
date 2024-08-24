import styles from '@/styles/FeaturedSection.module.css';


const FeaturedSection =() =>{
    return (
        
        <div className={styles.featuredSection}>
            <div className={styles.featuredLogos}>
                <h1>We Have been Featured On</h1>
                <div className={styles.logosContainer}>
                    <img src="/path/to/forbes.png" alt="Forbes" className={styles.logo} />
                    <img src="/path/to/fortune.png" alt="Fortune" className={styles.logo} />
                    <img src="/path/to/yahoo.png" alt="Yahoo" className={styles.logo} />
                    <img src="/path/to/aol.png" alt="AOL" className={styles.logo} />
                    <img src="/path/to/ani.png" alt="ANI" className={styles.logo} />
                    <img src="/path/to/yourstory.png" alt="YourStory" className={styles.logo} />
                </div>
            </div>
           
           <div className={styles.subFeaturedSection}>
            <div className={styles.featuredInfo}>
                <div className={styles.infoBox}>
                    <div className={styles.icon}>⚡</div>
                    <h3>Faster</h3>
                    <p>Get top vetted profiles within 24-48 hours</p>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.icon}>💬</div>
                    <h3>Reliable</h3>
                    <p>Dedicated Account Manager just one email/WhatsApp away</p>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.icon}>⭐</div>
                    <h3>Trusted</h3>
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