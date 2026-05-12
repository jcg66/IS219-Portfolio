import styles from "./TechnicalStrategy.module.css";

export default function TechnicalStrategy() {
  return (
    <section className={styles.section} aria-labelledby="strategy-heading">
      <div className={styles.header}>
        <p className={styles.kicker}>Engineering Thesis</p>
        <h2 id="strategy-heading" className={styles.title}>
          Efficiency as a feature.
        </h2>
      </div>
      <div className={styles.grid}>
        <article className={styles.card}>
          <p className={styles.cardLabel}>Efficiency Mandate</p>
          <p className={styles.cardText}>
            AI utility should not require a server farm. I design systems that stay fast, legible, and useful on constrained hardware by reducing overhead before adding scale.
          </p>
        </article>
        <article className={styles.card}>
          <p className={styles.cardLabel}>AI Workflow</p>
          <p className={styles.cardText}>
            AI generates boilerplate; I architect the logic. I use it to accelerate test scaffolds, telemetry mapping, and implementation drafts, then I refine the control flow, validation, and user-facing structure.
          </p>
        </article>
      </div>
    </section>
  );
}