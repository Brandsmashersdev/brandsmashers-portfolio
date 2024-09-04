import React from 'react';
import styles from '../../src/styles/Hero/Star.module.css'; 

const Star = ({ filled }) => {
  return (
    <div className={`${styles.star} ${filled ? styles.filled : ''}`}></div>
  );
};

export default Star;
