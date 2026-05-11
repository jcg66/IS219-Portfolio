# Sprint 2: Content & Case Studies

**Goal:** Integrate the project case studies and technical strategy content.

## Tasks

*   [ ] **Develop "Technical Strategy" Section:**
    *   Create a new component for the "Philosophy" section.
    *   Add content as described in `docs/OUTLINE.md`, focusing on the "Efficiency Mandate" and "AI Workflow."

*   [ ] **Build `<TerminalWrapper />` Component:**
    *   Design a reusable React component that mimics a terminal window.
    *   It should accept a `title` and `children` to display project details.
    *   Style it according to the "IDE-inspired" aesthetic.

*   [ ] **Create Project Case Studies (MDX):**
    *   Create `.mdx` files for the "Semantic SOC Analyst" and "Revised Midterm" projects.
    *   Define the frontmatter for each project (title, status, tech, links).
    *   Write the body content, detailing the problem, solution, and key features.

*   [ ] **Implement MDX Pipeline:**
    *   Develop the logic to read MDX files from the `content` directory.
    *   Use `gray-matter` to parse frontmatter.
    *   Use `next-mdx-remote` to render the MDX content with custom components.

*   [ ] **Implement Zod Validation:**
    *   Define a Zod schema that matches the project frontmatter structure.
    *   Integrate the schema to validate the frontmatter during the build process. The build should fail if validation fails.

*   [ ] **Style the "Toolbox" (Tech Stack) Section:**
    *   Create a component to display the tech stack.
    *   Style it to look like a configuration file (`.json` or `.yaml`) as specified in `docs/OUTLINE.md`.
