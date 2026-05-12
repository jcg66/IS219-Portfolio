import Hero from "@/components/Hero";
import TerminalWrapper from "@/components/TerminalWrapper";
import TechnicalStrategy from "@/components/TechnicalStrategy";
import Toolbox from "@/components/Toolbox";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className={styles.page}>
      <div className={styles.stack}>
        <Hero />

        <section className={styles.sectionBlock}>
          <TechnicalStrategy />
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionKicker}>The Proof</p>
            <h2 id="projects-title" className={styles.sectionTitle}>
              Featured projects.
            </h2>
          </div>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <TerminalWrapper key={project.slug} title={`${project.frontmatter.title} // ${project.frontmatter.status}`}>
                <div className={styles.projectMeta}>
                  <p className={styles.projectSummary}>{project.frontmatter.summary}</p>
                  <dl className={styles.projectFacts}>
                    <div>
                      <dt>Tech</dt>
                      <dd>{project.frontmatter.tech.join(", ")}</dd>
                    </div>
                    <div>
                      <dt>Repository</dt>
                      <dd>
                        <a href={project.frontmatter.links.repository} target="_blank" rel="noopener noreferrer">
                          Open repo
                        </a>
                      </dd>
                    </div>
                    {project.frontmatter.links.live ? (
                      <div>
                        <dt>Live</dt>
                        <dd>
                          <a href={project.frontmatter.links.live} target="_blank" rel="noopener noreferrer">
                            Open live demo
                          </a>
                        </dd>
                      </div>
                    ) : null}
                    {project.frontmatter.links.evidence ? (
                      <div>
                        <dt>Evidence</dt>
                        <dd>{project.frontmatter.links.evidence}</dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
                <div className={styles.projectContent}>{project.content}</div>
              </TerminalWrapper>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <Toolbox />
        </section>
      </div>
    </main>
  );
}
