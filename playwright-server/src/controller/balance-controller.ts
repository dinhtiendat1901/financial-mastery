import {BrowserContext, chromium} from "playwright";
import {BalanceRequest} from "../index";
import {getListBalance, setSearchCondition} from "../service/balance-service";

export interface Balance {
    time: string | null,
    couple: string | null,
    asset: string | null,
    type: string | null,
    status: string | null,
    value: string | null
}


export async function searchBalance(balanceRequest: BalanceRequest) {
    const browser: BrowserContext = await chromium.launchPersistentContext('/data', {
        headless: true,
        channel: 'chromium',
        viewport: null,
        args: [
            '--disable-blink-features=AutomationControlled'
        ],
    });

    const page = await browser.newPage()
    await page.goto('https://goonus.io/futures/BTC_VNDC', {waitUntil: 'domcontentloaded'})
    await page.locator('.tab-item.draggableCancel.text-body-2.font-bold').nth(5).click()
    await setSearchCondition(page, balanceRequest)
    const listBalance = await getListBalance(page)
    await browser.close()

    return listBalance
}