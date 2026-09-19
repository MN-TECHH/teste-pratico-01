import { test, expect } from '@playwright/test';

test('sidebar recolhe e expande, trocando a logo e mantendo o alt text', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Estado inicial: expandida
    await expect(page.getByTestId('brand-logo-full')).toBeVisible();
    await expect(page.getByTestId('brand-logo-icon')).not.toBeVisible();
    await expect(page.getByTestId('brand-logo-full')).toHaveAttribute('alt', /Vertex/i);

    // Recolhe
    await page.getByTestId('sidebar-toggle').click();
    await expect(page.getByTestId('brand-logo-icon')).toBeVisible();
    await expect(page.getByTestId('brand-logo-full')).not.toBeVisible();
    await expect(page.getByTestId('brand-logo-icon')).toHaveAttribute('alt', /Vertex/i);

    // Expande de volta
    await page.getByTestId('sidebar-toggle').click();
    await expect(page.getByTestId('brand-logo-full')).toBeVisible();
    await expect(page.getByTestId('brand-logo-icon')).not.toBeVisible();
});