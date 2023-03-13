const puppeteer = require("puppeteer");

(async () => {
  // Open chromium browser:
  const browser = await puppeteer.launch(); //{ headless: false }

  // Open a new tab:
  const page = await browser.newPage();

  //Go to page:
  await page.goto("https://muebleslufe.com/");

  //await page.waitForTimeout(4000);
  // cookies??
  //await page.click("#onetrust-accept-btn-handler")

  //search button
  await page.click("#search_widget");
  //find input, type .
  await page.type(".ui-autocomplete-input", "espejo ");

  //click submt button
  //await page.press(".c-header__quick-search-input").press("Enter");
  await page.keyboard.press("Enter");

  //page loads
  await page.waitForNavigation();

  //get images, store in array
  const urlImg = await page.$$eval("img", (urlImg) =>
    urlImg.map((img) => img.src)
  );

  //names of accom in array
  const names = await page.$$eval("h2 a", (titles) =>
    titles.map((title) => title.textContent)
  );

  //Get prices
  const prices = await page.$$eval(".price", (prices) =>
    prices.map((price) => price.innerHTML)
  );

  const furnitureArray = [];
  for (let i = 0; i < names.length; i++) {
    const furnitureData = {
      name: names[i],
      img: urlImg[i],
      price: prices[i],
    };
    furnitureArray.push(furnitureData);
  }
  console.log(furnitureArray);

  //Se cierra el navegador.
  await browser.close();
})();
