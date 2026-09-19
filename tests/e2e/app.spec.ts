import { test, expect } from '@playwright/test';

test.describe('Navegação e Sidebar', () => {
  test.use({ storageState: { cookies: [], origins: [] } }); // garante localStorage limpo

  test('sidebar recolhe e expande, alternando logos', async ({ page }) => {
    await page.goto('/');

    const logoFull = page.getByTestId('brand-logo-full');
    const logoIcon = page.getByTestId('brand-logo-icon');
    const sidebarToggle = page.getByTestId('sidebar-toggle');

    // Estado inicial conhecido: expandida
    await expect(logoFull).toBeVisible();
    await expect(logoIcon).not.toBeVisible();
    await expect(logoFull).toHaveAttribute('alt', /Vertex/);

    // Recolhe
    await sidebarToggle.click();
    await expect(logoIcon).toBeVisible();
    await expect(logoFull).not.toBeVisible();
    await expect(logoIcon).toHaveAttribute('alt', /Vertex/);

    // Expande de volta
    await sidebarToggle.click();
    await expect(logoFull).toBeVisible();
    await expect(logoIcon).not.toBeVisible();
  });

  test('navegação entre telas funciona corretamente', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('page-inicio')).toBeVisible();

    await page.getByTestId('nav-relatorio').click();
    await expect(page.getByTestId('page-relatorio')).toBeVisible();

    await page.getByTestId('nav-certificado').click();
    await expect(page.getByTestId('page-certificado')).toBeVisible();

    await page.getByTestId('nav-inicio').click();
    await expect(page.getByTestId('page-inicio')).toBeVisible();
  });
});

test.describe('Geração de PDF', () => {
  test('botão de gerar PDF não está na Home', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('generate-pdf')).toBeHidden();
  });

  test('dispara download no Relatório com nome de arquivo correto', async ({ page }) => {
    await page.goto('/relatorio');
    await expect(page.getByTestId('page-relatorio')).toBeVisible();

    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('generate-pdf').click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toMatch(/relatorio/i);
    expect(download.suggestedFilename()).toMatch(/\.pdf$/);
  });

  test('dispara download no Certificado com nome de arquivo correto', async ({ page }) => {
    await page.goto('/certificado');
    await expect(page.getByTestId('page-certificado')).toBeVisible();

    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('generate-pdf').click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toMatch(/certificado/i);
    expect(download.suggestedFilename()).toMatch(/\.pdf$/);
  });
});