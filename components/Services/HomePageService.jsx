import styles from "../../src/styles/Service/HomePageService.module.css";

const HomePageService = () => {
  return (
    <div className={styles.container} id="serviceHero">
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.overlay}></div>
        <div className={styles.headerContent}>
          <h1>Services</h1>
          <p>
            Deeply customized software solutions and IT services to make your
            business disruption-proof.
          </p>
        </div>
      </header>
    </div>
  );
};

export default HomePageService;
