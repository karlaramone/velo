import { test, expect } from '@playwright/test';

/// AAA - Arrange, Act, Assert

test('deve consultar um pedido aprovado', async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5173/');

  //checkpoint
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  // checkpoit
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-HBZVBE');

  // Act
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();
 
  await expect(page.getByText('VLO-HBZVBE')).toBeVisible({ timeout: 20_000 });
  await expect(page.getByText('APROVADO')).toBeVisible();



  // Assert
  //await expect(page.getByTestId('order-result-id')).toBeVisible({ timeout: 20_000 });
  //await expect(page.getByTestId('order-result-id')).toContainText('VLO-HBZVBE');

  // Assert
  //await expect(page.getByTestId('order-result-status')).toBeVisible();
  //await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});