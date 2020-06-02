/**
 * 1、全局开启、关闭信息输出
 * 2、可以指定某一类的控制台信息输出
 */

import { initGlobalAPI, customConsole, customConsoleMixin } from '@src/helpers';

function ConsoleLog(this: any): void {
  if (!(this instanceof ConsoleLog)) {
    customConsole.warn('[ConsoleLog warn]: ConsoleLog需要使用new关键字实例化');
  }

  return;
}

initGlobalAPI(ConsoleLog);
customConsoleMixin(ConsoleLog);

export default ConsoleLog;
