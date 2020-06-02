(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ConsoleLog = factory());
}(this, (function () { 'use strict';

  var DEFAULT_CONFIG = {
    silent: true,
    splitter: ' >>>>>> '
  };

  function initGlobalAPI(ConsoleLog) {
    var configDef = {};

    configDef.get = function () {
      return DEFAULT_CONFIG;
    };

    configDef.set = function () {
      customConsole.warn('[ConsoleLog warn]: 不要直接替换ConsoleLog的全局配置对象，应该设置单个字段。');
    };

    Object.defineProperty(ConsoleLog, 'config', configDef);
  }

  var log = console.log;
  var error = console.error;
  var warn = console.warn;
  var customConsole = {
    log: log,
    error: error,
    warn: warn
  };

  /**
   * 1、全局开启、关闭信息输出
   * 2、可以指定某一类的控制台信息输出
   */

  function ConsoleLog(options) {
    console.log('this', this);
    console.log('options', options);

    if (!(this instanceof ConsoleLog)) {
      customConsole.warn('[ConsoleLog warn]: ConsoleLog需要使用new关键字实例化');
    }

    return;
  }

  initGlobalAPI(ConsoleLog);

  return ConsoleLog;

})));
