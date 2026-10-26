import { expect, test } from '@playwright/test';

test('developer can discover and test an API', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Build connected experiences/i })).toBeVisible();
  await page.getByRole('link', { name: /Explore APIs/i }).click();
  await page.getByPlaceholder('Search APIs').fill('tracking');
  await page.getByRole('link', { name: /View docs/i }).click();
  await page.getByRole('button', { name: /Run in sandbox/i }).click();
  await expect(page.getByText('200 OK')).toBeVisible();
});

test('developer can create and revoke a sandbox key', async ({ page }) => {
  await page.goto('/dashboard');
  await page.getByRole('button', { name: 'Create key' }).click();
  await expect(page.getByText('Sandbox key 2')).toBeVisible();
  await page.getByRole('button', { name: 'Revoke' }).last().click();
  await expect(page.getByText('Sandbox key 2')).not.toBeVisible();
});
