// import React from 'react';
// import Image from 'next/image';
// import styles from '../../src/styles/Hero/OurPartners.module.css'; // Importing CSS module

// import clutchs from '../../public/Hero/clutchs.png'; // Correct path relative to your project
// import googles from '../../public/Hero/googles.png';
// import glassdoor from '../../public/Hero/GlassdoorLogo.png';

// const OurPartners = () => {
//   return (
//     <div className={styles.cardContainer}>
//       <h2 className={styles.carouselTitle}>Our Partners</h2>
//       <div className={styles.cardGrid}>
//         {/* Display each partner's logo in a card */}
//         <div className={styles.card}>
//           <Image src={clutchs} width={120} height={120} alt="AWS Partner" />
//         </div>
//         <div className={styles.card}>
//           <Image src={googles} width={100} height={100} alt="Microsoft Partner" />
//         </div>
//         <div className={styles.card}>
//           <Image src={glassdoor} width={100} height={100} alt="Google Partner" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurPartners;

import React from 'react';
import Image from 'next/image';
import styles from '../../src/styles/Hero/OurPartners.module.css';

import clutchs from '../../public/Hero/clutchs.png';
import googles from '../../public/Hero/googles.png';
import glassdoor from '../../public/Hero/GlassdoorLogo.png';

const OurPartners = () => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.carouselTitle}>Our Partners</h2>
      <div className={styles.cardGrid}>
        {/* Partner 1 */}
        <div className={styles.card}>
          <Image src={clutchs} width={120} height={120} alt="AWS Partner" />
          <div className={styles.stars}>
            {/* You can use Unicode stars or images */}
            <span>&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>

        {/* Partner 2 */}
        <div className={styles.card}>
          <Image src={googles} width={100} height={100} alt="Microsoft Partner" />
          <div className={styles.starsg}>
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>

        {/* Partner 3 */}
        <div className={styles.card}>
          <Image src={glassdoor} width={100} height={100} alt="Google Partner" />
          <div className={styles.starsG}>
            <span>&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
