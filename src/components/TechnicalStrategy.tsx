import styles from "./TechnicalStrategy.module.css";

export default function TechnicalStrategy() {
  return (
    <section className={styles.section} aria-labelledby="strategy-heading">
      <div className={styles.header}>
        <p className={styles.kicker}>Approach</p>
        <h2 id="strategy-heading" className={styles.title}>
          Efficiency.
        </h2>
      </div>
      <div className={styles.grid}>
        <article className={styles.card}>
          <p className={styles.cardLabel}>Efficiency</p>
          <p className={styles.cardText}>
            Fast, legible, low-overhead systems.
          </p>
        </article>
        <article className={styles.card}>
          <p className={styles.cardLabel}>Workflow</p>
          <p className={styles.cardText}>
            AI for scaffolds, checks, and drafts.
          </p>
        </article>
      </div>
    </section>
  );
}