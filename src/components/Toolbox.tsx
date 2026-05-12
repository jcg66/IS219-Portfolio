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
        <p className={styles.kicker}>Stack</p>
        <h2 id="toolbox-heading" className={styles.title}>Toolbox</h2>
      </div>
      <div className={styles.panel}>
        <pre className={styles.codeBlock} aria-label="Toolbox JSON registry">
          <code className={styles.code}>
            <span className={styles.codeLine}>
              <span className={styles.codePunctuation}>{`{`}</span>
            </span>
            {toolboxGroups.map((group, index) => (
              <span key={group.key} className={styles.codeLine}>
                <span className={styles.codeIndent} aria-hidden="true">
                  {"  "}
                </span>
                <span className={styles.codeKey}>{`"${group.key}"`}</span>
                <span className={styles.codePunctuation}>{": ["}</span>
                {group.items.map((item, itemIndex) => (
                  <span key={item}>
                    <span className={styles.codeString}>{`"${item}"`}</span>
                    {itemIndex < group.items.length - 1 ? <span className={styles.codePunctuation}>, </span> : null}
                  </span>
                ))}
                <span className={styles.codePunctuation}>{"]"}</span>
                {index < toolboxGroups.length - 1 ? <span className={styles.codePunctuation}>,</span> : null}
              </span>
            ))}
            <span className={styles.codeLine}>
              <span className={styles.codePunctuation}>{`}`}</span>
            </span>
          </code>
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