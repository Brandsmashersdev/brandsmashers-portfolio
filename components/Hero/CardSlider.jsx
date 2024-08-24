import React from "react";
import Image from "next/image";
import img1 from "../../public/Hero/img1.png";
import styles from "../../src/styles/CardSlider.module.css";
import righttick from "../../public/Hero/right.png";
import Star from "./Star";

const cardData = [
  {
    id: 1,
    name: "Neha Patankar",
    title: "Frontend Developer",
    rate: "$90/hr",
    img: img1,
    stars: 3,
    experience: "4+ years experience",
    role: "IT Services",
  },
  {
    id: 2,
    name: "Dolly Patankar",
    title: "YouTuber & Blogger",
    rate: "$30/hr",
    img: img1,
    stars: 2,
    experience: "8+ years experience",
    role: "Lending",
  },
  {
    id: 3,
    name: "Nishi Patankar",
    title: "Frontend Developer",
    rate: "$30/hr",
    img: img1,
    stars: 2,
    experience: "8+ years experience",
    role: "Lending",
  },
  {
    id: 4,
    name: "Nidhi Patankar",
    title: "Backend Developer",
    rate: "$30/hr",
    img: img1,
    stars: 4,
    experience: "9+ years experience",
    role: "Lending",
  },
  {
    id: 5,
    name: "Tanu Patankar",
    title: "React JS Developer",
    rate: "$30/hr",
    img: img1,
    stars: 3,
    experience: "3+ years experience",
    role: "Lending",
  },
];

const CardSlider = () => {
  return (
    <div>
      <div className={styles.card_slider_wrapper}>
        <div className={styles.card_slider_container}>
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={styles.card}
              style={{ "--delay": `${index - 1} ` }}
            >
              {/* card */}
              <div className={styles.rate}>{card.rate}</div>

              <div className={styles.content}>
                <div className={styles.img}>
                  <Image
                    src={card.img}
                    alt={card.name}
                    width={80}
                    height={80}
                  />
                </div>
                <div className={styles.details}>
                  <span className={styles.name}>{card.name}</span>
                  <div className={styles.title}>{card.title}</div>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < card.stars} />
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.experience}>
                  {card.experience} | {card.role}
                </div>

                <div className={styles.extra_info}>
                  <Image
                    src={righttick}
                    className={styles.right}
                    alt="Verified"
                    width={20}
                    height={20}
                  />
                  <div className={styles.placeholders_container}>
                    <div
                      className={`${styles.placeholder} ${styles.placeholder_long}`}
                    ></div>
                    <div
                      className={`${styles.placeholder} ${styles.placeholder_short}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
