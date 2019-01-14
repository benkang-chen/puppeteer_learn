const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false},{args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.taobao.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
