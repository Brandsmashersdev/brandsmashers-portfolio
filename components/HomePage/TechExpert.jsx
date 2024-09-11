
import styles from '../../src/styles/Hero/TechExpert.module.css';
import Image from 'next/image';
// import discussion from '../../public/Hero/techExperts.png';
import discussion from '../../public/Hero/techexpert.png';
// import discussions from '../../public/Hero/discussions.png';

const TechExpert = () => {
    return(
        <section className={styles.numbersSection}>
        <div className={styles.container}>
          <div className={styles.leftContent}>
          <Image src={discussion} 
          width={500}
          height={300}
          className={styles.heroImage} 
          layout="responsive"
          quality={100}
          />
          </div>

          <div className={styles.rightContent}>
           <div className={styles.detailes}>
              <h2 className={styles.heading}>
              Let's Innovate Together
              Start Your Project with Us Today!
              </h2>

              <h3 className={styles.subHeading}>
              Speak with Our Tech Experts Today!
              </h3>
            </div>

            <div className={styles.letstalk}>
            <button className={styles.ctaButton}>Let's Talk</button>
            </div>
          </div>
        </div>
      
      </section>
    )
}
export default TechExpert;