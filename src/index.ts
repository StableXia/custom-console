/**
 * 1、全局开启、关闭信息输出
 * 2、可以指定某一类的控制台信息输出
 */

import { initGlobalAPI } from '@src/helpers';

function ConsoleLog(): void {
  return;
}

initGlobalAPI(ConsoleLog);

export default ConsoleLog;
