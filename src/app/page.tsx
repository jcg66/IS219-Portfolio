import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import TerminalWrapper from "@/components/TerminalWrapper";
import TechnicalStrategy from "@/components/TechnicalStrategy";
import SiteFooter from "@/components/SiteFooter";
import Toolbox from "@/components/Toolbox";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getProjects();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>
      <main id="content" className={styles.page}>
        <div className={styles.stack}>
          <ScrollReveal className={styles.sectionBlock}>
            <Hero />
          </ScrollReveal>

          <ScrollReveal className={styles.sectionBlock}>
            <TechnicalStrategy />
          </ScrollReveal>

          <ScrollReveal className={styles.sectionBlock}>
            <section aria-labelledby="projects-title">
              <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>Work</p>
                <h2 id="projects-title" className={styles.sectionTitle}>Projects</h2>
              </div>
              <div className={styles.projectList}>
                {projects.map((project, index) => (
                  <ScrollReveal key={project.slug} className={styles.projectItem} delay={index * 0.08}>
                    <TerminalWrapper title={project.frontmatter.status}>
                      <div className={styles.projectMeta}>
                        <div className={styles.projectHeader}>
                          <h3 className={styles.projectTitle}>{project.frontmatter.title}</h3>
                        </div>
                        <p className={styles.projectSummary}>{project.frontmatter.summary}</p>
                        <dl className={styles.projectFacts}>
                          <div>
                            <dt>Tech</dt>
                            <dd>{project.frontmatter.tech.join(", ")}</dd>
                          </div>
                          <div>
                            <dt>Repository</dt>
                            <dd>
                              <a
                                className={styles.projectLink}
                                href={project.frontmatter.links.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span>Open repo</span>
                                <span aria-hidden="true" className={styles.projectLinkIcon}>
                                  ↗
                                </span>
                              </a>
                            </dd>
                          </div>
                          {project.frontmatter.links.live ? (
                            <div>
                              <dt>Live</dt>
                              <dd>
                                <a
                                  className={styles.projectLink}
                                  href={project.frontmatter.links.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span>Open live demo</span>
                                  <span aria-hidden="true" className={styles.projectLinkIcon}>
                                    ↗
                                  </span>
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
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal className={styles.sectionBlock}>
            <Toolbox />
          </ScrollReveal>

          <ScrollReveal className={styles.sectionBlock}>
            <SiteFooter year={currentYear} />
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
