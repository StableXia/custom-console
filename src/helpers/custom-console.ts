const log: Function = console.log;
const error: Function = console.error;
const warn: Function = console.warn;

export function customConsoleMixin(ConsoleLog: any): void {
  ConsoleLog.prototype.log = (value: any): void => {
    if (!ConsoleLog.config.silent) {
      return;
    }
    log(ConsoleLog.config.splitter, value);
  };

  ConsoleLog.prototype.error = (value: any): void => {
    if (!ConsoleLog.config.silent) {
      return;
    }
    error(ConsoleLog.config.splitter, value);
  };

  ConsoleLog.prototype.warn = (value: any): void => {
    if (!ConsoleLog.config.silent) {
      return;
    }
    warn(ConsoleLog.config.splitter, value);
  };
}

export const customConsole = {
  log,
  error,
  warn,
};
