(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.FECatch = factory());
}(this, (function () { 'use strict';

	var a = 123;

	return a;

})));
