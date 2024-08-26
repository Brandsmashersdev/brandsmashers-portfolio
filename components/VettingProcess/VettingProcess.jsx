import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from '../../src/styles/VettingProcess.module.css';

const VettingProcess = () => {

  return (
    <>

      {/* <h5 className={styles.heading}>Vetting Process</h5> */}
      <div className={styles.VettingProcessContainer}>
        <div className={styles.imagesContainer}>
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image1}`}
          />
          <Image
            src='/VettingProcess/person3.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image2}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image3}`}
          />
          <Image
            src='/VettingProcess/we.jpeg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image4}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image5}`}
          />
          <Image
            src='/VettingProcess/we.jpeg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image6}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image7}`}
          />
          <Image
            src='/VettingProcess/person3.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image8}`}
          />
          <Image
            src='/VettingProcess/person2.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image9}`}
          />
          <Image
            src='/VettingProcess/person3.jpg'
            alt='Images'
            width={20}
            height={20}
            className={`${styles.funnelImage} ${styles.image10}`}
          />
        </div>
        <div>

          {/* <div className={styles.funnelContainer}> */}
            {/* <div className={`${styles.funnelBox} ${styles.funnelOne}`}> */}
              <Image
                src='/VettingProcess/epi1.png'
                alt='Images'
                width={300}
                height={80}
                className={`${styles.ellipse} ${styles.first} ${styles.firstEllipse}`}
              />
              <Image
                src='/VettingProcess/fun1.png'
                alt='Images'
                width={300}
                height={100}
                className={`${styles.funnel} ${styles.first} ${styles.firstFunnel}`}
                style={{zIndex:"10"}}
              />
            {/* </div> */}

            {/* <div className={`${styles.funnelBox} ${styles.funnelSecond}`}> */}
              <Image
                src='/VettingProcess/epi2.png'
                alt='Images'
                width={300}
                height={80}
                className={`${styles.ellipse} ${styles.second} ${styles.secondEllipse}`}
              />
              <Image
                src='/VettingProcess/fun2.png'
                alt='Images'
                width={300}
                height={100}
                className={`${styles.funnel} ${styles.second} ${styles.secondFunnel}`}
              />
            {/* </div> */}
            {/* <div className={`${styles.funnelBox} ${styles.funnelThird}`}> */}
              <Image
                src='/VettingProcess/epi3.png'
                alt='Images'
                width={300}
                height={80}
                className={`${styles.ellipse} ${styles.third} ${styles.thirdEllipse}`}
              />
              <Image
                src='/VettingProcess/fun3.png'
                alt='Images'
                width={300}
                height={100}
                className={`${styles.funnel} ${styles.third} ${styles.thirdFunnel}`}
              />
            {/* </div> */}
            {/* <div className={styles.funnelBox}> */}
              <Image
                src='/VettingProcess/epi4.png'
                alt='Images'
                width={300}
                height={80}
                className={`${styles.ellipse} ${styles.forth} ${styles.forthEllipse}`}
              />
              <Image
                src='/VettingProcess/fun4.png'
                alt='Images'
                width={300}
                height={100}
                className={`${styles.funnel} ${styles.forth} ${styles.forthFunnel}`}
              />
            {/* </div> */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
};


export default VettingProcess;
