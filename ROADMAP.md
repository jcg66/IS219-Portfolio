# Project Roadmap: AI-Forward Professional Portfolio

This document outlines the development plan for building the AI-Forward Professional Portfolio, as specified in the project documentation. The project is divided into four sprints, each focusing on a distinct set of features.

## Sprint 1: Foundation & Structure

**Goal:** Establish the core project structure, set up the Next.js application, and build the foundational UI components.

*   **Features:**
    *   Initialize Next.js 15+ project with TypeScript.
    *   Configure static export for GitHub Pages deployment.
    *   Create the main layout and Hero section.
    *   Implement the "IDE-inspired" visual theme using CSS Modules.
    *   Set up the basic content architecture for MDX.

## Sprint 2: Content & Case Studies

**Goal:** Integrate the project case studies and technical strategy content.

*   **Features:**
    *   Develop the "Technical Strategy" section.
    *   Build the `<TerminalWrapper />` component for project display.
    *   Create MDX files for the "Semantic SOC Analyst" and "Revised Midterm" projects.
    *   Implement the `next-mdx-remote` pipeline with `gray-matter` and Zod validation for frontmatter.
    *   Style the "Toolbox" (Tech Stack) section.

## Sprint 3: Testing & Automation

**Goal:** Implement a comprehensive testing suite and set up the CI/CD pipeline.

*   **Features:**
    *   Configure Vitest for unit testing UI components.
    *   Write unit tests for critical components.
    *   Set up Playwright for end-to-end testing.
    *   Write E2E tests for navigation and critical links (GitHub, LinkedIn).
    *   Create the GitHub Actions workflow for CI/CD (build, test, deploy to GitHub Pages).

## Sprint 4: Refinement & Polish

**Goal:** Add final touches, animations, and perform a full documentation and accessibility review.

*   **Features:**
    *   Add subtle, precise animations with Framer Motion.
    *   Conduct a full accessibility audit (WCAG AA).
    *   Review and finalize all documentation (`README.md`, project case studies).
    *   Perform a final design review to ensure consistency with the "Builder" archetype.
    *   Deploy the final version to GitHub Pages.
