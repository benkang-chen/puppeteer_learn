const puppeteer = require('puppeteer')
const screenshot = 'jingdong.png'
try {
    (async () => {
        const browser = await puppeteer.launch({"headless":false});
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto('https://www.jd.com/')
        //第一个参数是元素选择器，第二个参数是输入框字符串
        await page.type('#key', 'OPPO 手机')
        //点击
        await page.click('#search > div > div.form > button > i')
        await page.waitForSelector('#J_promGoodsWrap_292 > div.mt')
        await page.screenshot({path: 'jd_list.png', fullPage: true})
        await page.click('#J_bottomPage > span.p-num > a.pn-next > em')
        // await page.waitForSelector('#resultsCol')
        // const pullovers = await page.$$('a.a-link-normal.a-text-normal')
        // await pullovers[2].click()
        // await page.waitForSelector('#ppd')
        // await page.screenshot({path: screenshot})
        // await browser.close()
        console.log('See screenshot: ' + screenshot)
    })()
} catch (err) {
    console.error(err)
}