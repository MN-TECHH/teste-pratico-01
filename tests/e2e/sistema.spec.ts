import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByTestId('sidebar-toggle').click();
  await page.getByTestId('sidebar-toggle').click();
  await page.getByTestId('nav-inicio').click();
  await page.getByTestId('card-relatorio').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('generate-pdf').click();
  await downloadPromise;
  await page.getByTestId('nav-inicio').click();
  await page.getByTestId('card-certificado').click();
  const download1Promise = page.waitForEvent('download');
  await page.getByTestId('generate-pdf').click();
  await download1Promise;
});