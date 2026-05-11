# Sprint 1: Foundation & Structure

**Goal:** Establish the core project structure, set up the Next.js application, and build the foundational UI components.

## Tasks

*   [ ] **Initialize Next.js Project:**
    *   Set up a new Next.js 15+ project.
    *   Use the App Router.
    *   Configure TypeScript with strict mode.

*   [ ] **Configure for Static Deployment:**
    *   Modify `next.config.js` to include `output: 'export'`.
    *   Add the `unoptimized: true` flag for images to ensure compatibility with GitHub Pages.

*   [ ] **Build Core Layout:**
    *   Create the main `layout.tsx` file.
    *   Implement the root page structure (`page.tsx`).
    *   Set up the basic SEO metadata.

*   [ ] **Implement "IDE-Inspired" Theme:**
    *   Create a global CSS file for custom properties (variables) based on the `STACK.md` palette.
    *   Use CSS Modules for component-level styling.
    *   Define the primary and mono-spaced fonts.

*   [ ] **Create Hero Section:**
    *   Build the Hero component as outlined in `docs/OUTLINE.md`.
    *   Use the specified mono-spaced font for the sub-headline.
    *   Add placeholder links for GitHub and LinkedIn.

*   [ ] **Set Up Basic MDX Architecture:**
    *   Install `next-mdx-remote` and `gray-matter`.
    *   Create a placeholder directory for project content (e.g., `content/projects`).
    *   Rough in a basic function to read Markdown files.
