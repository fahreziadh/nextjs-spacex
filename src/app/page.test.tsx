import { test, expect } from '@playwright/test';

test('homepage displays latest SpaceX launch information', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Check if the title is correct
  await expect(page).toHaveTitle(/Next.js/);

  // Check if the main heading is present
  await expect(page.locator('h1')).toHaveText('Welcome to the Homepage');

  // Check if the subtitle is present
  await expect(page.locator('h2')).toHaveText('Latest SpaceX Launch');
});