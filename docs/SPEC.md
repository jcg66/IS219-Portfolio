This document serves as the **Source of Truth** for the development of the AI-Forward Professional Portfolio. It is designed for a coding agent to ensure architectural consistency, technical rigor, and alignment with the "Builder" archetype.

---

# **System Spec: AI-Forward Professional Portfolio**

## **1. Executive Summary**

* **Identity:** AI-Forward Systems Engineer / "The Builder."
* **Mission:** To demonstrate the bridging of sophisticated AI orchestration (RAG) with resource-constrained infrastructure.
* **Aesthetic:** "IDE-Inspired." High-contrast, dark mode, mono-spaced accents, documentation-first utility.
* **Target Audience:** Technical Recruiters, Engineering Managers (AI/Cybersecurity).

---

## **2. Technical Scope**

### **Primary Goals**

* **Static Performance:** Deploy a lightning-fast, SEO-optimized single-page application via GitHub Pages.
* **Proof of Competence:** Showcase two deep-dive projects with verifiable technical documentation.
* **System Reliability:** Implement a CI/CD pipeline that includes automated testing for all portfolio features.
* **AI Intentionality:** Explicitly document the role of AI in the development lifecycle (code generation vs. architectural oversight).

### **Non-Goals**

* **No Heavy Backend:** The site must be fully exportable as a static site (no live Node.js server actions).
* **No Generic UI Kits:** Avoid "Bootstrap-style" or overly rounded/playful components.
* **No Fluff:** Remove any content that doesn't directly support the "Technical Systems Engineer" narrative.

---

## **3. Success Criteria (Definition of Done)**

1. **Lighthouse Scores:** 90+ across Performance, Accessibility, and Best Practices.
2. **Type Safety:** Zero `any` types in the TypeScript configuration; passing `tsc` build.
3. **Test Coverage:** Functional Vitest unit tests for UI components and Playwright E2E tests for critical outbound links (GitHub/LinkedIn).
4. **Content Integrity:** Zod-validated Markdown frontmatter for all project case studies.
5. **Project Evidence:** Visible "Revised" status on the Midterm project and "Automated Testing" evidence on the SOC Analyst project.

---

## **4. Tech Stack Specification**

| Component | Technology |
| --- | --- |
| **Framework** | Next.js 15+ (App Router, Static Export) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | CSS Modules + Custom Properties (Variables) |
| **Animation** | Framer Motion (Linear/Precise transitions) |
| **Content** | MDX (`next-mdx-remote` + `gray-matter`) |
| **Validation** | Zod (for Project Schema) |
| **Testing** | Vitest (Unit) + Playwright (E2E) |
| **Deployment** | GitHub Actions -> GitHub Pages |

---

## **5. Content Architecture**

### **I. Hero (The Initialization)**

* **Signal:** Headline defining the "AI-Forward Systems Engineer" identity.
* **Metrics:** A "System Status" component showing core competencies (Vector DBs, RAG, Python).

### **II. Strategy (The Thesis)**

* Brief narrative on "Efficiency as a Feature."
* Discussion of the AI-Assisted workflow: "AI generates the boilerplate; I architect the logic."

### **III. The Proof (Case Studies)**

1. **Semantic SOC Analyst (Job Tech):**
* Focus: RAG, Qdrant, Llama 3, 8GB RAM optimization.
* Deliverables: Link to Repo, Pytest validation results.


2. **The Shift to Oversight (Revised Midterm):**
* Focus: Next.js, Data Visualization (`recharts`), Technical Writing.
* Revision Note: Documenting the transition from "code creator" to "code reviewer."



### **IV. Registry (The Toolbox)**

* A structured JSON-like visual list of languages, frameworks, and security tools.

---

## **6. Key Implementation Notes for the Agent**

* **Static Export:** Ensure `next.config.js` is set to `output: 'export'`. Use the `unoptimized: true` flag for images if hosted on GitHub Pages.
* **Component Pattern:** Build a `<TerminalWrapper />` component to house project descriptions to maintain the "Builder" vibe.
* **Testing Philosophy:** Every project entry must have a corresponding test case in Playwright ensuring its links and deployment status are active.
* **Accessibility:** Ensure all high-contrast colors meet WCAG AA standards. Use mono-spaced fonts for data/technical labels only; use clean sans-serif for long-form reading.

---

**End of Specification.**