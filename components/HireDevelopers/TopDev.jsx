import styles from "@/styles/HireDevelopers/TopDev.module.css";
import Image from "next/image"; // Import the Image component

const TopDevSection = () => {
  const companies = [
    "amazon",
    "salesforce",
    "spotify",
    "accion-labs",
    "dunzo",
    "goeasy",
    "paytm",
    "dell",
    "eventbrite",
    "uber",
    "leapfinance",
    "khatabook",
    "airbnb",
    "swiggy",
    "github",
    "bsmith",
  ];

  return (
    <section className={styles.topdevSection}>
      <h2>
        <span className={styles.topdevTitleHighlight}>Top Developers</span>
        <span className={styles.topdevTitle}> for top companies</span>
      </h2>
      <p className={styles.topdevSubtitle}>
        We offer you access to well deserving talent for the technology industry
        that has the capacity to deliver as desired by your business. Our team
        is composed of skilled developers who’re familiar with the new
        tendencies in Internet connections. Whether you require remote
        developers in India or require us to build a dedicated team for your
        business, we offer customized solutions to meet your customized need and
        ensure that you can scale and innovate at pace.
      </p>
      {/* <div className={styles.topdevSectionBox}>
        <div className={styles.topdevCompanyLogos}>
          <div className={styles.row7}>
            {companies.slice(0, 6).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <Image
                  src={`/topDevs/${company}.png`}
                  alt={company}
                  width={100} // Adjust width as necessary
                  height={100} // Adjust height as necessary
                />
              </div>
            ))}
          </div>
          <div className={styles.row6}>
            {companies.slice(6, 11).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <Image
                  src={`/topDevs/${company}.png`}
                  alt={company}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className={styles.row5}>
            {companies.slice(11, 15).map(
              (
                company,
                index // Adjust slice range for last row
              ) => (
                <div key={index} className={styles.topdevCompanyLogo}>
                  <Image
                    src={`/topDevs/${company}.png`}
                    alt={company}
                    width={100}
                    height={100}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TopDevSection;
