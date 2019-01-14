const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({"headless":false});
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/');
    await page.focus('#kw');
    await page.keyboard.type('Just adding a title');
    await page.screenshot({ path: 'keyboard.png' });
    await browser.close();
})();