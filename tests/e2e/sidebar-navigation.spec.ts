import { test, expect } from '@playwright/test';

test('navegação e interação com a sidebar', async ({ page }) => {
  await page.goto('/');

  // Confirmar a interface inicial
  const sidebar = page.getByTestId('sidebar');
  const logoFull = page.getByTestId('brand-logo-full');
  const logoIcon = page.getByTestId('brand-logo-icon');

  await expect(sidebar).toHaveAttribute('data-collapsed', 'false');
  await expect(page.getByTestId('page-inicio')).toBeVisible();
  await expect(logoFull).toBeVisible();
  await expect(logoIcon).not.toBeVisible();

  // Recolher a sidebar
  await page.getByTestId('sidebar-toggle').click();
  await expect(sidebar).toHaveAttribute('data-collapsed', 'true');
  await expect(logoIcon).toBeVisible();
  await expect(logoFull).not.toBeVisible();

  // Expandir novamente
  await page.getByTestId('sidebar-toggle').click();
  await expect(sidebar).toHaveAttribute('data-collapsed', 'false');
  await expect(logoFull).toBeVisible();
  await expect(logoIcon).not.toBeVisible();

  // Navegar para Relatório
  await page.getByTestId('nav-relatorio').click();
  await expect(page.getByTestId('page-relatorio')).toBeVisible();
  await expect(page).toHaveURL(/.*\/relatorio/);

  // Navegar para Certificado
  await page.getByTestId('nav-certificado').click();
  await expect(page.getByTestId('page-certificado')).toBeVisible();
  await expect(page).toHaveURL(/.*\/certificado/);

  // Voltar para Início
  await page.getByTestId('nav-inicio').click();
  await expect(page.getByTestId('page-inicio')).toBeVisible();
  await expect(page).toHaveURL(/.*\/$/); // Verifica se a rota voltou pra raiz
});