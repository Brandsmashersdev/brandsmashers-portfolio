
// import styles from '../../src/styles/Hero/AchievedCard.module.css'; // Correct path and name
// import Image from 'next/image'; // Import Next.js Image component

// const AchievedCard = ({ image, title, description }) => {

//   return (
//     <div className={styles.card}>
//       <Image src={image} alt={title} className={styles.cardImage} layout="responsive" />
//       <div className={styles.cardContent}>
//         <h3 className={styles.cardTitle}>{title}</h3>
//         <p className={styles.cardDescription}>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default AchievedCard;

import styles from '../../src/styles/Hero/AchievedCard.module.css'; // Correct path and name
import Image from 'next/image'; // Import Next.js Image component

const AchievedCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles.cardImage} layout="responsive" />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default AchievedCard;
