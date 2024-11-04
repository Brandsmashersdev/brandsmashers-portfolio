import styles from '../../src/styles/Partnership/Bubbles.module.css';
import logo from '../../public/Logo/logo.png';
import bsalogo from '../../public/Logo/bsa.png'
import Image from 'next/image';

const  Bubbles = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.bubble1} ${styles.largeBubble}`}></div>
      <div className={`${styles.bubble} ${styles.mediumBubble}`}></div>
      <div className={`${styles.bubble2} ${styles.smallBubble}`}></div>

      {/* Company Logos */}
      <div className={styles.logoBubbles}>
        <div className={styles.logoBubble}>
          <div className={styles.blacksmithLogo}>
            <Image src={bsalogo} alt="Blacksmith Agency Logo" width={100}/>
          </div>
        </div>

        <div className={styles.logoBubble}>
          <div className={styles.purpleLogo}>
          <Image src={logo} alt="Another Logo" width={100}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
