import {Page} from "playwright";
import {BalanceRequest} from "../index";
import {Balance} from "../controller/balance-controller";

export async function setSearchCondition(page: Page, balanceRequest: BalanceRequest) {
    if (balanceRequest.startDate && balanceRequest.endDate) {
        await page.getByPlaceholder('Ngày bắt đầu').fill(balanceRequest.startDate)
        await page.getByPlaceholder('Ngày kết thúc').fill(balanceRequest.endDate)
    }
    await page.locator('.h-full.w-full.flex.justify-center.items-center.rounded.select-none.bg-black-bt-1.px-2').nth(1).click()
    await page.waitForTimeout(1500)
}

export async function getListBalance(page: Page): Promise<Balance[]> {
    const listBalance: Balance[] = []
    const listRow = await page.locator('.sc-dhKdcB.byvBIM.rdt_TableRow').all()
    for (const row of listRow) {
        const time = await row.locator('.sc-fqkvVR.sc-dcJsrY.sc-iGgWBj.leESHQ.RHUnY.brkkzl.rdt_TableCell').locator('.uppercase.w-full.text-ellipsis.cursor-pointer').textContent()
        const couple = await row.locator('.sc-fqkvVR.sc-dcJsrY.sc-iGgWBj.leESHQ.bMfivS.brkkzl.rdt_TableCell').nth(0).locator('.uppercase.w-full.text-ellipsis.cursor-pointer').textContent()
        const asset = await row.locator('.sc-fqkvVR.sc-dcJsrY.sc-iGgWBj.leESHQ.bMfivS.brkkzl.rdt_TableCell').nth(1).locator('.uppercase.w-full.text-ellipsis.cursor-pointer').textContent()
        const type = await row.locator('.sc-fqkvVR.sc-dcJsrY.sc-iGgWBj.leESHQ.oVDjX.brkkzl.rdt_TableCell').locator('.text-black-text-3.flex').locator('div').textContent()
        const status = await row.locator('.sc-fqkvVR.sc-dcJsrY.sc-iGgWBj.leESHQ.dXuzFw.brkkzl.rdt_TableCell').locator('.text-black-text-3').textContent()

        const value = await row.locator('.sc-fqkvVR.sc-dcJsrY.sc-iGgWBj.leESHQ.kyOHWe.brkkzl.rdt_TableCell').locator('.flex.items-center').textContent()
        listBalance.push({
            time,
            couple,
            asset,
            type,
            status,
            value
        })
    }

    return listBalance
}