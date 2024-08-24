import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../src/styles/VettingProcess.module.css'; 

const VettingProcess = () => {

  return (
    <>
    <div className={styles.VettingProcessContainer}>
    <div className={styles.imagesContainer}>
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image1}`}
          />
          <Image
            src='/VettingProcess/person3.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image2}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image3}`}
          />
          <Image
            src='/VettingProcess/we.jpeg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image4}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image5}`}
          />
          <Image
            src='/VettingProcess/we.jpeg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image6}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image7}`}
          />
          <Image
            src='/VettingProcess/person3.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image8}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image9}`}
          />
          <Image
            src='/VettingProcess/person3.jpg'
            alt='Images'
            width={30}
            height={30}
            className={`${styles.funnelImage} ${styles.image10}`}
          />
       </div>
       <div>

        <div className={styles.funnelContainer}>
            <div className={styles.funnel}>
            <Image
            src='/VettingProcess/epi1.png'
            alt='Images'
            width={300}
            height={80}
            className={styles.eplipse}
            />
        <Image
            src='/VettingProcess/fun1.png'
            alt='Images'
            width={300}
            height={100}
            className={styles.funnel}
            />
        </div>
            
            
            <div className={styles.funnel}>
            <Image
            src='/VettingProcess/epi2.png'
            alt='Images'
            width={300}
            height={80}
            className={styles.eplipse}
          />
        <Image
            src='/VettingProcess/fun2.png'
            alt='Images'
            width={300}
            height={100}
            className={styles.funnel}
          /> 
            </div>
            <div className={styles.funnel}>
            <Image
            src='/VettingProcess/epi3.png'
            alt='Images'
            width={300}
            height={80}
            className={styles.eplipse}
          />
        <Image
            src='/VettingProcess/fun3.png'
            alt='Images'
            width={300}
            height={100}
            className={styles.funnel}
          />
            </div>
            <div className={styles.funnel}>
            <Image
            src='/VettingProcess/epi4.png'
            alt='Images'
            width={300}
            height={80}
            className={`${styles.eplipse} ${styles.fouth}`}
          />
        <Image
            src='/VettingProcess/fun4.png'
            alt='Images'
            width={300}
            height={100}
            className={`${styles.funnel} ${styles.fouth}`}
          />
          </div>
            </div>
        </div>
    </div>
    </>
  );
};


export default VettingProcess;
