const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/', {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: '2.pdf', format: 'a4' });

    await browser.close();
})();
