import {Subscription} from 'egg';
import Browser from '../common/browser';

class NCS extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '10s', // 3s间隔
      type: 'all', // 每台机器上只有一个 worker 会执行这个定时任务，每次执行定时任务的 worker 的选择是随机的。
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const browser = new Browser();
    await browser.newPage();
    await browser.close();
  }
}

export default NCS;
