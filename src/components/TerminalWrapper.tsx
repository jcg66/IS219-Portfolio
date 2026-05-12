import styles from "./TerminalWrapper.module.css";

type TerminalWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function TerminalWrapper({ title, children }: TerminalWrapperProps) {
  return (
    <section className={styles.terminal} aria-label={title}>
      <header className={styles.chrome}>
        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className={styles.title}>{title}</p>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  );
}