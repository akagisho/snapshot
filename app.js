const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/screenshot', function(req, res, next) {
  const viewportWidth = 1200;
  const viewportHeight = 900;
  (async () => {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox'
      ],
      headless: true
    });
    const page = await browser.newPage();
    page.setViewport({width: viewportWidth, height: viewportHeight});

    if (process.env.HTTP_USER_AGENT) {
      page.setUserAgent(process.env.HTTP_USER_AGENT);
    }

    await page.goto(req.query.url);
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });

    data = await page.screenshot({
      fullPage: true
    });
    await browser.close();

    res.set('Content-Type', 'image/png');
    res.write(data);
    res.end();
  })();
});

module.exports = app;
