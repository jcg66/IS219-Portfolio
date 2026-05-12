# Sprint 3: Testing & Automation

**Goal:** Implement a comprehensive testing suite and set up the CI/CD pipeline.

## Tasks

*   [x] **Configure Vitest:**
    *   Install and configure Vitest for the Next.js project.
    *   Set up the necessary configuration for testing React components.

*   [x] **Write Unit Tests:**
    *   Write unit tests for critical UI components, such as `<TerminalWrapper />` and the Hero section.
    *   Ensure components render correctly with different props.

*   [x] **Set Up Playwright:**
    *   Install and configure Playwright for end-to-end testing.
    *   Create a basic test to ensure the site builds and loads.

*   [x] **Write E2E Tests:**
    *   Write a Playwright test to verify that all main sections of the single-page application are present.
    *   Create a test that navigates to the project sections and verifies that the GitHub and LinkedIn links are present, correct, and have `rel="noopener noreferrer"`.

*   [x] **Create GitHub Actions Workflow:**
    *   Create a `.github/workflows/ci.yml` file.
    *   Define a workflow that triggers on push and pull requests to the `main` branch.
    *   The workflow should:
        1.  Check out the code.
        2.  Install dependencies (`npm install`).
        3.  Run the TypeScript compiler (`tsc`).
        4.  Run Vitest unit tests.
        5.  Run Playwright E2E tests.
        6.  Build the static site (`next build`).

*   [x] **Configure Deployment to GitHub Pages:**
    *   Add a final step to the GitHub Actions workflow to deploy the exported static site (`out` directory) to the `gh-pages` branch.
    *   Configure the repository settings to serve the site from the `gh-pages` branch.
