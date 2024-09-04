import React from 'react';
import styles from '@/styles/HireDevelopers/CaseStudies.module.css'
import styles2 from '@/styles/HireDevelopers/Offer.module.css'

const CaseStudies = () => {
    return (
        <div className={styles.success_stories}>
            <div className={styles2.offerbtn} style={{margin:"auto"}}>FEATURED CASE STUDIES</div>
            <h2><span>Brandsmashers</span> Success Stories</h2>
            <p>See how we&apos;ve accelerated growth and improved outcomes for businesses <br /> with our efficient hiring solutions.
            </p>
            <div className={styles.stories_grid}>
                <div className={styles.contentContainer}>
                    <div className={styles.story_card}>
                        <h2>Somnoware</h2>
                        {/* <div className={styles.story_logo}></div> */}
                    </div>
                    <h3>How we helped a healthtech company reduce their hiring cycle by 50%</h3>
                    <span>Learn More</span>
                </div>


                <div className={styles.contentContainer}>
                    <div className={styles.story_card}>
                        <h2>Limiere</h2>
                        {/* <div className={styles.story_logo}></div> */}
                    </div>
                    <h3>How we helped this company reduce their operational cost by 30%</h3>
                    <span>Learn More</span>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.story_card}>
                        <h2>LYKKE</h2>
                        {/* <div className={styles.story_logo}></div> */}
                    </div>
                    <h3>How we helped this crypto exchange reduce their time-to-market and improve bottom line</h3>
                    <span>Learn More</span>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;