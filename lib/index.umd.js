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

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var log = console.log;
  var error = console.error;
  var warn = console.warn;

  function normalizedLogParams(params) {
    if (params.length === 1) {
      return {
        markName: '',
        values: params
      };
    }

    var _params = _toArray(params),
        markName = _params[0],
        values = _params.slice(1);

    return {
      markName: markName,
      values: values
    };
  }

  function customConsoleMixin(ConsoleLog) {
    ConsoleLog.prototype.log = function () {
      if (!ConsoleLog.config.silent) {
        return;
      }

      for (var _len = arguments.length, pryload = new Array(_len), _key = 0; _key < _len; _key++) {
        pryload[_key] = arguments[_key];
      }

      var _normalizedLogParams = normalizedLogParams(pryload),
          markName = _normalizedLogParams.markName,
          values = _normalizedLogParams.values;

      log.apply(void 0, [markName, ConsoleLog.config.splitter].concat(_toConsumableArray(values)));
    };

    ConsoleLog.prototype.error = function () {
      if (!ConsoleLog.config.silent) {
        return;
      }

      for (var _len2 = arguments.length, pryload = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        pryload[_key2] = arguments[_key2];
      }

      var _normalizedLogParams2 = normalizedLogParams(pryload),
          markName = _normalizedLogParams2.markName,
          values = _normalizedLogParams2.values;

      error.apply(void 0, [markName, ConsoleLog.config.splitter].concat(_toConsumableArray(values)));
    };

    ConsoleLog.prototype.warn = function () {
      if (!ConsoleLog.config.silent) {
        return;
      }

      for (var _len3 = arguments.length, pryload = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        pryload[_key3] = arguments[_key3];
      }

      var _normalizedLogParams3 = normalizedLogParams(pryload),
          markName = _normalizedLogParams3.markName,
          values = _normalizedLogParams3.values;

      warn.apply(void 0, [markName, ConsoleLog.config.splitter].concat(_toConsumableArray(values)));
    };
  }
  var customConsole = {
    log: log,
    error: error,
    warn: warn
  };

  /**
   * 1、全局开启、关闭信息输出
   * 2、可以指定某一类的控制台信息输出
   */

  function ConsoleLog() {
    if (!(this instanceof ConsoleLog)) {
      customConsole.warn('[ConsoleLog warn]: ConsoleLog需要使用new关键字实例化');
    }

    return;
  }

  initGlobalAPI(ConsoleLog);
  customConsoleMixin(ConsoleLog);

  return ConsoleLog;

})));
