import React from 'react';
import styles from '../../src/styles/Hero/Card.module.css'; 

const personData = [
    {
        id: 1,
        name: "Amit Sharma",
        title: "Backend Developer",
        rate: "80% match",
        img: "/Hero/img1.png", 
    },
    {
        id: 2,
        name: "Sneha Kapoor",
        title: "UI/UX Designer",
        rate: "85% match",
        img: "/Hero/img1.png",
    },
    {
        id: 3,
        name: "Rahul Desai",
        title: "Full Stack Developer",
        rate: "90% match",
        img: "/Hero/img1.png",
    },
];


const Card = () => {
    return (
        <div className={styles.cardContainer}>
            {personData.map((person) => (
                <div key={person.id} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <p className={styles.cardRate}>{person.rate}</p>
                    </div>

                    <div className={styles.containt}>
                    <div className={styles.cardImageNameRow}>
                        <img src={person.img} alt={person.name} className={styles.cardImage} />
                    </div>
                    <div className={styles.title}>
                        <h3 className={styles.cardName}>{person.name}</h3>
                        <p className={styles.cardTitle}>{person.title}</p>
                    </div>
                 </div>

                 <div className={styles.placeholders_container}>
                    <div
                      className={`${styles.placeholder} ${styles.placeholder_long}`}
                    ></div>
                    <div
                      className={`${styles.placeholder} ${styles.placeholder_short}`}
                    ></div>
                  </div>
                  
                </div>
            ))}
        </div>
    );
};

export default Card;

