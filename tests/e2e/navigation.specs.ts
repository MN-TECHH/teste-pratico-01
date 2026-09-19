import { test, expect } from '@playwright/test';

test('navega entre inicio, relatorio e certificado', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.getByTestId('page-inicio')).toBeVisible();

    await page.getByTestId('nav-relatorio').click();
    await expect(page.getByTestId('page-relatorio')).toBeVisible();

    await page.getByTestId('nav-certificado').click();
    await expect(page.getByTestId('page-certificado')).toBeVisible();

    await page.getByTestId('nav-inicio').click();
    await expect(page.getByTestId('page-inicio')).toBeVisible();
});