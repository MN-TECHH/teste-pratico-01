import { test, expect } from '@playwright/test';

test('deve disparar o download do PDF em Relatório e Certificado', async ({ page }) => {
  await page.goto('/');

  // Acessar Relatório
  await page.getByTestId('card-relatorio').click();

  // Capturar o download do PDF no Relatório
  const downloadRelatorioPromise = page.waitForEvent('download');
  await page.getByTestId('generate-pdf').click();
  const downloadRelatorio = await downloadRelatorioPromise;
  expect(downloadRelatorio.suggestedFilename()).toMatch(/\.pdf$/);

  // Acessar Certificado
  await page.getByTestId('nav-certificado').click();

  // Capturar o download do PDF no Certificado
  const downloadCertificadoPromise = page.waitForEvent('download');
  await page.getByTestId('generate-pdf').click();
  const downloadCertificado = await downloadCertificadoPromise;
  expect(downloadCertificado.suggestedFilename()).toMatch(/\.pdf$/);
});