import styles from '@/styles/TopDev.module.css';

const TopDevSection = () => {
  const companies = [
    'teslac', 'amazon', 'salesforce', 'walmart', 'google@', 
    'meta', 'spotify', 'dunzo', 'paytm', 'uber', 
    'chase', 'leapfinance', 'khatabook', 'adani', 'airbnb', 
    'swiggy', 'github'
  ];

  return (
    <section className={styles.topdevSection}>
      <h2>
        <span className={styles.topdevTitleHighlight}>Top Devs</span><span className={styles.topdevTitle}>, Trusted by The Best in Business</span>
      </h2>
      <p className={styles.topdevSubtitle}>
        Join 24 Unicorns, 132 YC-backed Startups, 17 Fortune 500s, 20 VC Portfolios & 400 Large IT Services Companies who trusted Supersourcing.
      </p>
      <div className={styles.topdevSectionBox}>
        <div className={styles.topdevCompanyLogos}>
          <div className={styles.row7}>
            {companies.slice(0, 7).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <img src={`/Hero/${company}.png`} alt={company} />
              </div>
            ))}
          </div>
          <div className={styles.row6}>
            {companies.slice(7, 13).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <img src={`/Hero/${company}.png`} alt={company} />
              </div>
            ))}
          </div>
          <div className={styles.row5}>
            {companies.slice(13, 18).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <img src={`/Hero/${company}.png`} alt={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDevSection;
