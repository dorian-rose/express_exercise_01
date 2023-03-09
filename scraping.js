const puppeteer = require("puppeteer");

async function searchBooking() {
  // Open chromium browser:
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ["--disable-extensions"],
  });

  // Open a new tab:
  const page = await browser.newPage();

  //Go to bookinh page:
  await page.goto("https://www.booking.com");

  // cookies??
  await page.click("#sp-cc-accept");

  //find input, type .
  await page.type("#:Ra9:", "noosa");

  //click submt button
  await page.click(
    ".fc63351294 a822bdf511 d4b6b7a9e7 cfb238afa1 c938084447 f4605622ad aa11d0d5cd"
  );

  //page loads
  await page.waitForNavigation();

  //get images, store in array
  const urlImg = await page.$$eval("img.b8b0793b0e", (urlImg) =>
    urlImg.map((img) => img.src)
  );

  //names of accom in array
  const names = await page.$$eval(".fcab3ed991 a23c043802", (titles) =>
    titles.map((title) => title.innerHTML)
  );

  //Get prices
  //   const prices = await page.$$eval(".xxxxx, (prices) =>
  //     prices.map((price) => price.innerHTML)
  //   );

  const arrayAccom = [];
  for (let i = 0; i < names.length; i++) {
    const accomData = {
      name: names[i],
      img: urlImg[i],
      //price: prices[i],
    };
    arrayAccom.push(accomData);
  }
  console.log(arrayAccom);

  //Se cierra el navegador.
  await browser.close();
}
searchBooking();
