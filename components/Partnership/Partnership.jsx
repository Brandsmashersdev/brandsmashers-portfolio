import { useEffect, useState } from "react";
import styles from "../../src/styles/Partnership/Partnership.module.css";
import logo from "../../public/Logo/logo.png";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import Bubbles from "./Bubbles";
import Link from "next/link";

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define mobile screen size threshold
    };

    // Check window size on load
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <Bubbles />

        <div className={styles.containtText}>
         
          <h1 className={styles.mainHeading}>
            The Importance of Credibility through{!isMobile && <br />} Website
            Design
          </h1>

          <p className={styles.paragraph}>
            When users visit your website, a seamless, cohesive experience can
            make all the difference in keeping them engaged. At <Link href="/HireDevelopers" className={styles.link}>  Brandsmashers, </Link>
             we understand the power of consistency in web design. We have
            partnered with <Link href="https://blacksmith.agency/" className={styles.link}>  Blacksmith Agency   </Link>to help businesses create a
            visually unified online presence. It is more than aesthetics; this
            is about building trust and making sure your visitors do not get
            confused or lost in exploring your site.
          </p>
        </div>

        <div className={styles.text}>
          <h2 className={styles.heading}>Visual Consistency Builds Trust</h2>
          <p className={styles.paragraph}>
            Think of visiting a site where every page looks like it&s a
            different designer&apos;s artwork. Without consistent branding
            through color, typography, and placement, visitors will disconnect,
            and that disconnection is often synonymous with a distrust of your
            brand. We have dealt with similar problems hundreds of times. Using
            Blacksmith, we realigned the users of this company for a smoother
            process, which ultimately led to increased conversions. 
            <Link href="https://blacksmith.agency/adobe-commerce-magento-development" className={styles.link}>  click here
            to learn more   </Link>
            about how to maintain that visual cohesion.
          </p>

          <h2 className={styles.heading}>
            Consistency of behavior in performing something enhances usability.
          </h2>
          <p className={styles.paragraph}>
            Consistent navigation, buttons, and layouts aren&apos;t just nice to
            have; they make the user comfortable as they work their way through
            your site. This predictability means fewer distractions and a
            sharper focus on your content. Recently, Brandsmashers implemented
            design changes for a client where predictable CTA placements led to
            better engagement rates. We believe the
            <Link href="https://blacksmith.agency/custom-web-design-services" className={styles.link}>  number one solution  </Link>
            to boost
            usability is a consistent design approach.{" "}
          </p>
          

          <p className={styles.paragraph}>
            Consistency gives a professional look, helps build trust with your
            users, and makes navigating on your website more pleasant. If your
            brand is ready to bring some harmony into your online presence, then
            Brandsmashers, together with Blacksmith, will walk you through the
            process, step by step.
          </p>
        </div>
      </main>
    </div>
  );
};
export default Partnership;
