// components/TechShowcase.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faAndroid,
  faAngular,
  faAws,
  faMicrosoft,
  faJs,
  faNode,
  faBitcoin,
  faCodepen,
  faRocketchat,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { faServer, faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Hero/techshowcase.module.css";

const technologies = [
  {
    name: ".NET",
    icon: faWindows,
    iconClass: styles.netIcon,
  },
  {
    name: "Android",
    icon: faAndroid,
    iconClass: styles.androidIcon,
  },
  {
    name: "Angular",
    icon: faAngular,
    iconClass: styles.angularIcon,
  },
  {
    name: "ASP.NET",
    icon: faMicrosoft,
    iconClass: styles.aspnetIcon,
  },
  {
    name: "AWS",
    icon: faAws,
    iconClass: styles.awsIcon,
  },
  {
    name: "Azure",
    icon: faMicrosoft,
    iconClass: styles.azureIcon,
  },
  {
    name: "Backbone.js",
    icon: faJs,
    iconClass: styles.backboneIcon,
  },
  {
    name: "Backend",
    icon: faServer,
    iconClass: styles.backendIcon,
  },
  {
    name: "Blockchain",
    icon: faBitcoin,
    iconClass: styles.blockchainIcon,
  },
  {
    name: "C/C++",
    icon: faCode,
    iconClass: styles.cppIcon,
  },
];

const TechShowcase = () => {
  const router = useRouter();

  const handleCardClick = (techName) => {
    router.push(`/Technologies#tech`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <FontAwesomeIcon icon={faCodepen} className={styles.headerIcon} />
        </div>
        <h2 className={styles.title}>Innovative Technologies We Offer</h2>
        <p className={styles.description}>
          At Brandsmashers, we work towards offering you excellent IT services
          and solutions that are relevant to your business. As one of the
          leading software development companies in India, we focus on
          delivering best of breed fast-and-lean technology solutions. Whether
          you are a small business that is just starting out or advancing large
          enterprise that seeks to boost your position in the market, our
          services in software development, cloud technologies, and AI guarantee
          your success in the world wide web arena.
        </p>
      </div>

      <div className={styles.grid}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(tech.name)}
            style={{ cursor: "pointer" }}
          >
            <div className={`${styles.iconContainer} ${tech.iconClass}`}>
              <FontAwesomeIcon icon={tech.icon} className={styles.icon} />
            </div>
            <h3 className={styles.techName}>{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechShowcase;
