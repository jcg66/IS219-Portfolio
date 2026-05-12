# AI-Forward Professional Portfolio

This repository contains the source code for my personal portfolio, built to showcase my skills as an **AI-Forward Systems Engineer**. The site is designed with an "IDE-inspired" aesthetic, emphasizing technical rigor, efficiency, and a documentation-first approach.

Live site: [https://jcg66.github.io/IS219-Portfolio/](https://jcg66.github.io/IS219-Portfolio/)

## Core Philosophy: The "Builder" Archetype

This portfolio embodies the "Builder" archetype: a focus on creating high-utility, resource-optimized tools. The narrative is centered on bridging the gap between sophisticated AI orchestration and the reality of resource-constrained environments.

*   **Identity:** AI-Forward Systems Engineer
*   **Mission:** Demonstrate production-grade AI solutions on consumer-grade hardware.
*   **Aesthetic:** High-contrast, dark mode, mono-spaced accents, and a clean, functional layout.

## Technical Specifications

The portfolio is a single-page application built with Next.js and deployed as a static site on GitHub Pages. It adheres to a strict set of technical and quality standards.

| Component      | Technology                               |
| -------------- | ---------------------------------------- |
| **Framework**  | Next.js 15+ (App Router, Static Export)  |
| **Language**   | TypeScript (Strict Mode)                 |
| **Styling**    | CSS Modules + Custom Properties          |
| **Content**    | MDX (`next-mdx-remote` + `gray-matter`)  |
| **Validation** | Zod (for Project Schema)                 |
| **Testing**    | Vitest (Unit) + Playwright (E2E)         |
| **Deployment** | GitHub Actions -> GitHub Pages           |

### Key Features

*   **Static Performance:** Lightning-fast load times with a 90+ Lighthouse score target.
*   **Type Safety:** A strict TypeScript configuration with zero `any` types.
*   **Automated Testing:** A full CI/CD pipeline with unit and end-to-end tests.
*   **Content Integrity:** Zod-validated Markdown frontmatter for all project case studies.

## Development Roadmap

The project is being developed across four sprints, each with a specific focus:

1.  **Foundation & Structure:** Setting up the Next.js project and core UI.
2.  **Content & Case Studies:** Integrating project content via an MDX pipeline.
3.  **Testing & Automation:** Building the testing suite and CI/CD workflow.
4.  **Refinement & Polish:** Finalizing Framer Motion scrollytelling, accessibility, and documentation review.

Current status: Sprint 3 is complete, and Sprint 4 is focused on polish, motion, and documentation cleanup.

For a more detailed breakdown, please see the [ROADMAP.md](docs/ROADMAP.md) and the individual sprint plans in the `docs/sprints` directory.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
