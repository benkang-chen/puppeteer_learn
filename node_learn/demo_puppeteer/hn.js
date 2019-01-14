const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox'], headless:false});
  const page = await browser.newPage();
  //await page.setJavaScriptEnabled(true);
  await page.goto('https://www.tmall.com/', {waitUntil: 'load'});
  let scrollEnable = true;
  let scrollStep = 500;
  while (scrollEnable) {
      scrollEnable = await page.evaluate((scrollStep) => {
          let scrollTop = document.scrollingElement.scrollTop;
          document.scrollingElement.scrollTop = scrollTop + scrollStep;
          return document.body.clientHeight > scrollTop + 1000 ? true : false
      }, scrollStep);
      await page.waitFor(1*1000)
  }
  // await page.pdf({path: 'hn.pdf', format: 'A4'});
  await page.screenshot({path: 'example.png',fullPage:true});
  console.log("dede");
  //await page.waitFor(10*1000);
  // await browser.close();
})();
