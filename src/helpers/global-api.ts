import { customConsole } from '@src/helpers';

import { DEFAULT_CONFIG } from '@src/constants';

import { IfaConfig, IfaAnyObj } from '@src/flows';

type IfaConfigDef = IfaConfig & IfaAnyObj;

export function initGlobalAPI(ConsoleLog: Function): void {
  const configDef: IfaConfigDef = {};

  configDef.get = (): IfaConfig => DEFAULT_CONFIG;

  configDef.set = (): void => {
    customConsole.warn('[ConsoleLog warn]: 不要直接替换ConsoleLog的全局配置对象，应该设置单个字段。');
  };

  Object.defineProperty(ConsoleLog, 'config', configDef);
}
