// // components/NumbersSection.js
// import styles from '../../src/styles/Hero/NumberSection.module.css';
// import CountUp from 'react-countup';

// const NumbersSection = () => {
//   return (
//     <section className={styles.numbersSection}>
//       <div className={styles.container}>
//         <div className={styles.leftContent}>
//           <h3 className={styles.subtitle}>Solution Matrix</h3>
//           <h2 className={styles.title}>Proof is in the Numbers</h2>
//           <p className={styles.description}>
//             A trusted tech partner for accelerating growth & future-readiness using next-gen services and solutions.
//           </p>
//           <button className={styles.ctaButton}>Get Started</button>
//         </div>
//         <div className={styles.rightContent}>
//           <div className={styles.stat}>
//             <h3 className={styles.statNumber}>22+</h3>
//             <p className={styles.statText}>Years of Expertise</p>
//           </div>
//           <div className={styles.stat}>
//             <h3 className={styles.statNumber}>95%</h3>
//             <p className={styles.statText}>Timely Deliveries</p>
//           </div>
//           <div className={styles.stat}>
//             <h3 className={styles.statNumber}>30+</h3>
//             <p className={styles.statText}>Markets Worldwide</p>
//           </div>
//           <div className={styles.stat}>
//             <h3 className={styles.statNumber}>100+</h3>
//             <p className={styles.statText}>Global Brands</p>
//           </div>
//         </div>
//       </div>
    
//     </section>
//   );
// };

// export default NumbersSection;

// components/NumbersSection.js
import styles from '../../src/styles/Hero/NumberSection.module.css';
import CountUp from 'react-countup';

const NumbersSection = () => {
  return (
    <section className={styles.numbersSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h3 className={styles.subtitle}>Solution Matrix</h3>
          <h2 className={styles.title}>Proof is in the Numbers</h2>
          <p className={styles.description}>
            A trusted tech partner for accelerating growth & future-readiness using next-gen services and solutions.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
        <div className={styles.rightContent}>
          {/* Stat 1 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={22} duration={9} suffix="+" />
            </h3>
            <p className={styles.statText}>Years of Expertise</p>
          </div>

          {/* Stat 2 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={95} duration={9} suffix="%" />
            </h3>
            <p className={styles.statText}>Timely Deliveries</p>
          </div>

          {/* Stat 3 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={30} duration={9} suffix="+" />
            </h3>
            <p className={styles.statText}>Markets Worldwide</p>
          </div>

          {/* Stat 4 */}
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>
              <CountUp start={0} end={100} duration={9} suffix="+" />
            </h3>
            <p className={styles.statText}>Global Brands</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
