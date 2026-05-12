import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  year: number;
};

export default function SiteFooter({ year }: SiteFooterProps) {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.header}>
        <p className={styles.kicker}>Direct Connectivity</p>
        <h2 className={styles.title}>The footer.</h2>
      </div>
      <div className={styles.panel}>
        <div className={styles.statusRow}>
          <span className={styles.label}>System Status</span>
          <span>All Systems Operational — {year}</span>
        </div>
        <div className={styles.links}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}