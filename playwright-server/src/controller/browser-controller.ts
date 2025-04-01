import {chromium} from "playwright";

export async function openBrowser() {
    await chromium.launchPersistentContext('/data', {
        headless: false,
        viewport: null,
        args: [
            '--disable-blink-features=AutomationControlled'
        ],
    });
}