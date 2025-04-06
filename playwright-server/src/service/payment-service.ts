import {Page} from "playwright";
import {Payment} from "../controller/payment-controller";


export async function getListPaymentPerPage(page: Page): Promise<Payment[]> {
    await page.locator('.inline-flex.items-center.justify-center.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.text-primary-brand.h-10.rounded-md.border-2.border-primary-border.p-0.w-10.cursor-pointer').last().click()
    await page.waitForTimeout(1000)
    return await getListPayment(page)
}


export async function getListPayment(page: Page): Promise<Payment[]> {
    const list_payment: Payment[] = []
    const list_row = await page.locator('div.py-2.rounded-xl').locator('div.space-y-4').all()
    for (const row of list_row) {
        const items_center_container = row.locator('div.items-center').first()
        const payment_name = await items_center_container.locator('div.items-center').locator('span.font-medium').first().textContent()
        const payment_value = await items_center_container.locator('div.text-end').nth(0).locator('span.font-medium').first().textContent()
        const time = await items_center_container.locator('div.text-end').nth(1).locator('span.font-medium').first().textContent()
        const status = await items_center_container.locator('div.text-end').nth(2).locator('span.font-medium').first().textContent()
        list_payment.push({
            name: payment_name,
            value: payment_value,
            time: time,
            status: status
        })
    }
    return list_payment
}
