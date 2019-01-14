const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({"headless":false});
    const page = await browser.newPage();

    // set the viewport so we know the dimensions of the screen
    await page.setViewport({ width: 1300, height: 600 });

    // go to a page setup for mouse event tracking
    await page.goto('https://www.baidu.com/');
    await page.focus('#kw');
    await page.keyboard.type('Just adding a title');
    // click an area
    await page.mouse.click(700, 30, { button: 'left' });
    console.log("dede")
    // the screenshot should show feedback from the page that right part was clicked.
    await page.screenshot({ path: 'mouse_click.png' });
    await browser.close();
})()