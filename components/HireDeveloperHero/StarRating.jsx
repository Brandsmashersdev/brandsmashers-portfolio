// components/StarRating.js
import styles from '../../src/styles/Hero/StarRating.module.css'; // Correctly import CSS module

const StarRating = () => {
  return (
    <>
    <div className={styles.starContainer}>
      {/* Using the CSS classes correctly */}
      <span className={styles.fullStar}>★</span>
      <span className={styles.fullStar}>★</span>
      <span className={styles.fullStar}>★</span>
      <span className={styles.fullStar}>★</span>
      <span className={styles.halfStar}>★</span>
      <div className={styles.reviews}> 20,000+ reviews</div>
      </div>

     
      </>
  );
};

export default StarRating;
