import styles from "./Toolbox.module.css";

const toolboxGroups = [
  {
    key: "orchestration",
    label: "Orchestration",
    items: ["LangChain", "Hugging Face", "Groq"],
  },
  {
    key: "infrastructure",
    label: "Infrastructure",
    items: ["Qdrant", "GitHub Actions", "GitHub Pages"],
  },
  {
    key: "languages",
    label: "Languages / Frameworks",
    items: ["Python", "Next.js", "TypeScript"],
  },
  {
    key: "security",
    label: "Security Frameworks",
    items: ["MITRE ATT&CK", "NVD Integration"],
  },
];

export default function Toolbox() {
  return (
    <section className={styles.section} aria-labelledby="toolbox-heading">
      <div className={styles.header}>
        <p className={styles.kicker}>Registry</p>
        <h2 id="toolbox-heading" className={styles.title}>
          The toolbox.
        </h2>
      </div>
      <div className={styles.panel}>
        <pre className={styles.codeBlock}>
{`{
  "orchestration": ["LangChain", "Hugging Face", "Groq"],
  "infrastructure": ["Qdrant", "GitHub Actions", "GitHub Pages"],
  "languages": ["Python", "Next.js", "TypeScript"],
  "security": ["MITRE ATT&CK", "NVD Integration"]
}`}
        </pre>
        <dl className={styles.list}>
          {toolboxGroups.map((group) => (
            <div key={group.key} className={styles.listItem}>
              <dt className={styles.term}>{group.label}</dt>
              <dd className={styles.value}>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}