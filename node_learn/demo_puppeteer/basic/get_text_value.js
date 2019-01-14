const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com/news');
    // css选择器语法
    const name = await page.evaluate(() => document.querySelector('.hnname > a').innerText);
    console.log(name);
    await browser.close();
})();