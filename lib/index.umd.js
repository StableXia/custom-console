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
      console.warn('不要直接替换ConsoleLog的全局配置对象，应该设置单个字段。');
    };

    Object.defineProperty(ConsoleLog, 'config', configDef);
  }

  /**
   * 1、全局开启、关闭信息输出
   * 2、可以指定某一类的控制台信息输出
   */

  function ConsoleLog() {
    return;
  }

  initGlobalAPI(ConsoleLog);

  return ConsoleLog;

})));
