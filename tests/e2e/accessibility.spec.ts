import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const sitePath = "/IS219-Portfolio/";

test("homepage has no critical accessibility violations", async ({ page }) => {
  await page.goto(sitePath);

  const accessibilityScanResults = await new AxeBuilder({ page }).exclude("iframe").analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});