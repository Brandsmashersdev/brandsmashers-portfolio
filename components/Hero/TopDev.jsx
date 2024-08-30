import styles from '@/styles/TopDev.module.css';

const TopDevSection = () => {
  const companies = [
   'amazon', 'salesforce','spotify', 'accion-labs','dunzo', 'Goeasy','paytm','Dell','eventbrite', 'uber', 
     'leapfinance', 'khatabook', 'airbnb', 
    'swiggy', 'github'
  ];

  return (
    <section className={styles.topdevSection}>
      <h2>
        <span className={styles.topdevTitleHighlight}>Top Developers</span><span className={styles.topdevTitle}> for top companies</span>
      </h2>
      <p className={styles.topdevSubtitle}>
        We connect you with top tech talent that delivers results and drives your business forward.
      </p>
      <div className={styles.topdevSectionBox}>
        <div className={styles.topdevCompanyLogos}>
          <div className={styles.row7}>
            {companies.slice(0, 6).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <img src={`/topDevs/${company}.png`} alt={company} />
              </div>
            ))}
          </div>
          <div className={styles.row6}>
            {companies.slice(6, 11).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <img src={`/topDevs/${company}.png`} alt={company} />
              </div>
            ))}
          </div>
          <div className={styles.row5}>
            {companies.slice(11, 20).map((company, index) => (
              <div key={index} className={styles.topdevCompanyLogo}>
                <img src={`/topDevs/${company}.png`} alt={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDevSection;
