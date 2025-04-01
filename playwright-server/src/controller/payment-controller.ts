import {BrowserContext, chromium} from "playwright";
import {getListPayment, getListPaymentPerPage} from "../service/payment-service";


export interface Payment {
    name: string | null,
    value: string | null,
    time: string | null,
    status: string | null
}

export async function getAllPayment() {
    const browser: BrowserContext = await chromium.launchPersistentContext('/data', {
        headless: true,
        channel: 'chromium',
        viewport: null,
        args: [
            '--disable-blink-features=AutomationControlled'
        ],
    });

    const page = await browser.newPage()
    await page.goto('https://goonus.io/my/history', {waitUntil: 'networkidle'})
    const firstPaymentList = await getListPayment(page)
    let allPayments = [...firstPaymentList]
    const page_count = await page.locator('[class="text-primary-second"]').first().textContent()
    if (page_count) {
        for (let i = 1; i < parseInt(page_count); i++) {
            const nextPaymentList = await getListPaymentPerPage(page)
            allPayments = [...allPayments, ...nextPaymentList]
        }
    }
    await browser.close()
    return allPayments

}






