import { test, expect } from '@playwright/test';

test('sidebar, navegação e PDFs', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('brand-logo-full')).toBeVisible();

  await page.getByTestId('sidebar-toggle').click();
  await expect(page.getByTestId('brand-logo-icon')).toBeVisible();
  await expect(page.getByTestId('brand-logo-full')).toBeHidden();

  await page.getByTestId('sidebar-toggle').click();
  await expect(page.getByTestId('brand-logo-full')).toBeVisible();

  await page.getByTestId('nav-relatorio').click();
  await expect(page.getByTestId('page-relatorio')).toBeVisible();

  const reportDownloadPromise = page.waitForEvent('download');
  await page.getByTestId('generate-pdf').click();
  const reportDownload = await reportDownloadPromise;
  expect(reportDownload.suggestedFilename()).toMatch(
    /^relatorio-mensal-\d{4}-\d{2}-\d{2}\.pdf$/,
  );

  await page.getByTestId('nav-certificado').click();
  await expect(page.getByTestId('page-certificado')).toBeVisible();

  const certificateDownloadPromise = page.waitForEvent('download');
  await page.getByTestId('generate-pdf').click();
  const certificateDownload = await certificateDownloadPromise;
  expect(certificateDownload.suggestedFilename()).toMatch(
    /^certificado-\d{4}-\d{2}-\d{2}\.pdf$/,
  );

  await page.getByTestId('nav-inicio').click();
  await expect(page.getByTestId('page-inicio')).toBeVisible();
});