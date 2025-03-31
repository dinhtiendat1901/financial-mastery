import {chromium} from "playwright";

async function runProfile() {
    await chromium.launchPersistentContext('/data', {
        headless: false,
        viewport: null,
        args: [
            '--disable-blink-features=AutomationControlled'
        ],
    });
}


export {runProfile}