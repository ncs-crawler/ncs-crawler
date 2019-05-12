import * as puppeteer from 'puppeteer';

class Browser {
  browser: any;
  options: object = {
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
      // '--ignore-certificate-errors',
      '--no-sandbox',
      // '--disable-xss-auditor',
      // '--disable-setuid-sandbox',
      // '--disable-notifications',
      // '--allow-running-insecure-content',
    ],
  };
  public async init(args?: object) {
    Object.assign(this.options, args);
    this.browser = await puppeteer.launch(this.options);
  }

  public async newPage() {
    await this.init({});
    const page = await this.browser.newPage();
    await page.goto('https://www.youtube.com/user/NoCopyrightSounds/playlists');
  }
  public async close() {
    await this.browser.close();
  }
}

export default Browser;
