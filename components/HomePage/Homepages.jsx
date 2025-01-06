// components/HeroSection.js
import { FaArrowRight } from "react-icons/fa";
import styles from "../../src/styles/Hero/Homepages.module.css";
import Image from "next/image";
import Slider from "react-slick";
import { useRouter } from "next/router";
import Contactus from "@/pages/contactus";

const HeroSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/contactus`);
  };

  return (
    <section className={styles.heroSection} id="home-page">
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Expert <span className={styles.gradient}>Developers,</span>
          <br />
          <span className={styles.highlight}>
            Streamlined <span className={styles.gradient}>Solutions</span>
          </span>{" "}
          <br />
        </h1>
        <p className={styles.description}>
          All in One Place with Brandsmashers Tech.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => handleCardClick()}
          style={{ cursor: "pointer" }}
        >
          Consult with Us
          <FaArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
