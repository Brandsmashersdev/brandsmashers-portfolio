
import styles from '../../src/styles/Hero/TechExpert.module.css';
import Image from 'next/image';
// import discussion from '../../public/Hero/techExperts.png';
import discussion from '../../public/Hero/discussion.jpeg';
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
              Ready to Innovate? Kickstart Your Project with Us Now!

              </h2>

              <h3 className={styles.subHeading}>
              Connect with Our Tech Specialists and Get Started Today!
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