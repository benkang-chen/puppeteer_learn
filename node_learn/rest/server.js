const express = require('express');
const devices = require('puppeteer/DeviceDescriptors');
const app = express();
let browser;
let page;

(async () => {
    const puppeteer = require('puppeteer');
    browser = await puppeteer.launch({headless: true});
    // page = await browser.newPage();
    // await page.emulate(devices['iPhone 6']);
})();

app.get('/test', function (req, res) {
    (async() => {
        const url = req.query.url
        console.log(url)
        page = await browser.newPage();
        await page.emulate(devices['iPhone 6']);
        await page.goto( url, {timeout:120000});
        const title = await page.title();
        await page.waitForSelector('#J_mod6 > div > span.sales')
        const sale = await page.$eval('#J_mod6 > div > span.sales', el => el.innerText)
        console.log(sale)
        console.log(title);
        res.send(title)
        page.close()
    })();
})

const server = app.listen(8081, function () {

    const host = server.address().address
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})