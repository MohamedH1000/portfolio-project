const poppeteer = require("puppeteer");

async function scrapProduct(url) {
  const browser = await poppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  const [image_array] = await page.$(
    'img.lazyload'
  );
  const src = await image_array.getProperty("data-src");
  const src_url = await src.jsonValue();

  console.log({ src_url });

  browser.close();
}

scrapProduct("https://chefaa.com/eg-en/now/category/skin-care");
