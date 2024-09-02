
import styles from '../../src/styles/Hero/TechExpert.module.css';
import Image from 'next/image';
// import downloads from '../../public/download.png';
import discussion from '../../public/Hero/discussion.png';
// import discussions from '../../public/Hero/discussions.png';

const TechExpert = () => {
    return(
        <section className={styles.numbersSection}>
        <div className={styles.container}>
          <div className={styles.leftContent}>
          <Image src={discussion} 
          width={400}
          height={200}
          className={styles.heroImage} />
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

            <div>
            <button className={styles.ctaButton}>Let's Talk</button>
            </div>
          </div>
        </div>
      
      </section>
    )
}
export default TechExpert;