import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout, NestSchedule } from '@nestcloud/schedule';
import Browser from '../common/browser';

const URL = 'https://www.youtube.com/user/NoCopyrightSounds/playlists';
@Injectable()
export class NCSService extends NestSchedule {
  // 每小时执行一次
  // @Cron('* * */1 * * *')
  @Timeout(2000)
  async crawl() {
    console.log('executing cron job');
    // const browser = new Browser();
    // const page = await browser.newPage();
    // await page.goto(URL);
    // await browser.close();
  }
}
