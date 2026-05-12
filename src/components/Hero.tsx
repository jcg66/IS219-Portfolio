import type { CSSProperties } from "react";

import { withSiteBasePath } from "@/lib/site-path";

import styles from "./Hero.module.css";

const heroPortraitSrc = withSiteBasePath("/hero-portrait.jpg");
const heroGeometrySrc = withSiteBasePath("/hero-geometry.svg");
const heroShellStyle = {
  ["--hero-geometry" as "--hero-geometry"]: `url("${heroGeometrySrc}")`,
} as CSSProperties;

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.shell} style={heroShellStyle}>
        <div className={styles.heroHeader}>
          <div className={styles.portraitFrame}>
            <img
              className={styles.portrait}
              src={heroPortraitSrc}
              alt="Circular profile illustration for James Girgis"
              width="512"
              height="512"
            />
          </div>
          <div className={styles.identity}>
            <p className={styles.kicker}>Portfolio snapshot</p>
            <h1 className={styles.title}>
              James Girgis <span className={styles.accent}>{"//"}</span> AI-Forward Systems Engineer
            </h1>
          </div>
        </div>
        <div className={styles.heroBody}>
          <p className={styles.subtitle}>
            Specializing in automated threat intelligence and RAG-based orchestration. I build focused security tools that stay useful in constrained environments.
          </p>
          <div className={styles.stats}>
            <div className={styles.statRow}>
              <span className={styles.statMarker}>◆</span>
              <span>Focus: AI security tooling</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statMarker}>◆</span>
              <span>Stack: vector search, RAG, local inference</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statMarker}>◆</span>
              <span>Constraint: optimized for 8GB RAM deployments</span>
            </div>
          </div>
          <div className={styles.actions}>
            <a href="https://github.com/jcg66" target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
              View GitHub
            </a>
            <a href="https://linkedin.com/in/james-c-girgis" target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
