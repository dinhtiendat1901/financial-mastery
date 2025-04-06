import {chromium} from "playwright";

export async function openBrowser() {
    await chromium.launchPersistentContext('/data', {
        headless: false,
        viewport: null,
        args: [
            '--disable-blink-features=AutomationControlled'
        ],
    });
    // await page.locator('.border.border-primary-border.p-2.rounded-md.w-full.cursor-pointer.px-2.flex.items-center.gap-x-2').first().click()
    //
    // while (await page.locator('.space-y-4.rdp-caption_start.rdp-caption_end').locator('.text-center.font-medium').textContent() !== 'Tháng 01/2025') {
    //     await page.locator('.rdp-button_reset.rdp-button.inline-flex.items-center.justify-center.whitespace-nowrap.text-sm.font-medium.ring-offset-background.transition-colors.border-primary-brand.text-primary-brand.rounded-md.h-7.w-7.bg-transparent.p-0.opacity-50.absolute.left-1').click()
    // }
    //
    //
    // await page.locator('.rdp-button_reset.rdp-button.inline-flex.items-center.justify-center.whitespace-nowrap.text-sm.ring-offset-background.transition-colors.rounded-md.h-9.w-9.p-0.font-normal.rounded-tl-xl.rounded-bl-xl.rounded-tr-none.rounded-br-none:not(.day-outside)').filter({has: page.locator('text="5"')}).first().click()


    // await page.locator('.ant-select.ant-select-borderless.select-filters.css-tjsggz.ant-select-single.ant-select-show-arrow.ant-select-show-search').nth(1).click()
    // await page.locator('.ant-select-item-option-content').filter({hasText: 'USDT'}).click()


}