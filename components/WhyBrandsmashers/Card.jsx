
// import React from 'react';
// import styles from '../../src/styles/Hero/Card.module.css'; // Assuming you're using a CSS module for styling

// const personData = [
//     {
//         id: 1,
//         name: "Neha Patankar",
//         title: "Frontend Developer",
//         rate: "$90/hr",
//         img: "/Hero/img1.png", // Correcting the path for Next.js usage
//     },
//     {
//         id: 2,
//         name: "Dolly Patankar",
//         title: "YouTuber & Blogger",
//         rate: "$30/hr",
//         img: "/Hero/img1.png",
//     },
//     {
//         id: 3,
//         name: "Nishi Patankar",
//         title: "Frontend Developer",
//         rate: "$30/hr",
//         img: "/Hero/img1.png",
//     },
// ];

// const Card = () => {
//     return (
//         <div className={styles.cardContainer}>
//             {personData.map((person) => (
//                 <div key={person.id} className={styles.card}>
//                     <div className={styles.cardHeader}>
//                         <p className={styles.cardRate}>{person.rate}</p>
//                     </div>
//                     <div className={styles.cardImageNameRow}>
//                         <img src={person.img} alt={person.name} className={styles.cardImage} />
//                         {/* <h3 className={styles.cardName}>{person.name}</h3> */}
//                        </div>
//                        <div className={styles.title}>
//                         <h3 className={styles.cardName}>{person.name}</h3>
//                         <p className={styles.cardTitle}>{person.title}</p>
//                         </div>
                
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Card;

// components/Card.js
import React from 'react';
import styles from '../../src/styles/Hero/Card.module.css'; // Assuming you're using a CSS module for styling

const personData = [
    {
        id: 1,
        name: "Neha Patankar",
        title: "Frontend Developer",
        rate: "super dev",
        img: "/Hero/img1.png", // Correcting the path for Next.js usage
    },
    {
        id: 2,
        name: "Dolly Patankar",
        title: "YouTuber & Blogger",
        rate: "90% match",
        img: "/Hero/img1.png",
    },
    {
        id: 3,
        name: "Nishi Patankar",
        title: "Frontend Developer",
        rate: "95% match",
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
                </div>
            ))}
        </div>
    );
};

export default Card;

