import { expect, test } from "@playwright/test";

const sitePath = "/IS219-Portfolio/";

test("renders the main portfolio sections", async ({ page }) => {
  await page.goto(sitePath);

  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: /AI-Forward Systems Engineer/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Efficiency as a feature." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured projects." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The toolbox." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The footer." })).toBeVisible();

  await expect(page.getByRole("link", { name: "Open repo" })).toHaveCount(2);
  await expect(page.getByRole("link", { name: "Open live demo" })).toHaveCount(2);
});

test("keeps outbound links explicit and safe", async ({ page }) => {
  await page.goto(sitePath);

  const githubLink = page.getByRole("link", { name: "View GitHub" });
  const linkedInLink = page.getByRole("link", { name: "Connect on LinkedIn" });

  await expect(githubLink).toHaveAttribute("href", "https://github.com");
  await expect(githubLink).toHaveAttribute("target", "_blank");
  await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  await expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com");
  await expect(linkedInLink).toHaveAttribute("target", "_blank");
  await expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");

  const projectLinks = page.getByRole("link", { name: /Open (repo|live demo)/i });
  const projectLinkCount = await projectLinks.count();

  for (let index = 0; index < projectLinkCount; index += 1) {
    const link = projectLinks.nth(index);

    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

test("renders the current year in the footer status", async ({ page }) => {
  await page.goto(sitePath);

  const currentYear = new Date().getFullYear();

  await expect(page.getByText(`All Systems Operational — ${currentYear}`)).toBeVisible();
});