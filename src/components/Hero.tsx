import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.shell}>
        <p className={styles.kicker}>System Initialization</p>
        <h1 className={styles.title}>
          [Your Name] <span className={styles.accent}>{"//"}</span> AI-Forward Systems Engineer
        </h1>
        <p className={styles.subtitle}>
          Specializing in automated threat intelligence and RAG-based orchestration. I build high-performance security tools optimized for resource-constrained environments.
        </p>
        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span className={styles.statMarker}>◆</span>
            <span>Focus: AI/Cybersecurity Fusion</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statMarker}>◆</span>
            <span>Architecture: Vector DBs, RAG, Local Inference</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statMarker}>◆</span>
            <span>Efficiency Metric: Optimized for 8GB RAM deployments</span>
          </div>
        </div>
        <div className={styles.actions}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
            View GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
