const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch({"headless":false});
    const page = await browser.newPage();
    await page.emulate(devices['iPhone 6']);
    await page.goto('https://www.baidu.com/');
    await page.screenshot({path: 'full.png', fullPage: true});
    console.log(await page.title());
    await browser.close();
})();