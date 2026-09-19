import { test, expect } from '@playwright/test';

test('gera PDF no relatorio com nome de arquivo identificando o documento', async ({ page }) => {
    await page.goto('http://localhost:5173/relatorio');
    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('generate-pdf').click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/relatorio/i);
    expect(download.suggestedFilename()).toMatch(/\.pdf$/);
});

test('gera PDF no certificado com nome de arquivo identificando o documento', async ({ page }) => {
    await page.goto('http://localhost:5173/certificado');
    const downloadPromise = page.waitForEvent('download');
    await page.getByTestId('generate-pdf').click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/certificado/i);
    expect(download.suggestedFilename()).toMatch(/\.pdf$/);
});

test('botao de gerar PDF nao aparece na home', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.getByTestId('generate-pdf')).toHaveCount(0);
});