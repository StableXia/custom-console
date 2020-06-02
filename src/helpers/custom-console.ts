const log: Function = console.log;
const error: Function = console.error;
const warn: Function = console.warn;

export function customConsoleMixin(ConsoleLog: Function): void {
  ConsoleLog.prototype.log = (value: any): void => {
    log(value);
  };

  ConsoleLog.prototype.error = (value: any): void => {
    error(value);
  };

  ConsoleLog.prototype.warn = (value: any): void => {
    warn(value);
  };
}

export const customConsole = {
  log,
  error,
  warn,
};
