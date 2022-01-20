const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/');
    await page.waitForSelector('body > toolbar-component')
    await page.evaluate(() => {
       this.document.querySelector('body > toolbar-component').style.backgroundColor = '#1F54C0'
    })
    await page.screenshot({ path: '1.png' });

    await browser.close();
})();
