
export function generateOrderCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    const randomLetters = (length) =>
      Array.from({ length }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
      ).join('');
  
    return `${randomLetters(3)}-${randomLetters(6)}`;
  }

  import { Page } from '@playwright/test'

  export async function searchOrder(page: Page, orderNumber: string) {
    await page.getByRole('textbox', { name: 'Número do Pedido' }).fill(orderNumber)
    await page.getByRole('button', { name: 'Buscar Pedido' }).click()
  }