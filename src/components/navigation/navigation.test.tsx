import { test, expect } from '@playwright/test';

test('navigation links are present and functional', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Check if the navigation is present
  const navigation = page.locator('nav');
  await expect(navigation).toBeVisible();

  // Check if the navigation links are present
  const links = navigation.locator('a');
  await expect(links).toHaveCount(2);

  // Check the text of the links
  await expect(links.nth(0)).toHaveText('Homepage');
  await expect(links.nth(1)).toHaveText('Launches');

  // Check if the links navigate correctly
  await Promise.all([
    page.waitForNavigation(), // Wait for the navigation to complete
    links.nth(1).click(), // Click on the "Launches" link
  ]);
  await expect(page).toHaveURL(/launches/); // Verify the URL after navigation
});
