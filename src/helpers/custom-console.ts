const log: Function = console.log;
const error: Function = console.error;
const warn: Function = console.warn;

interface IfaNormalizedParams {
  markName: string;
  values: any[];
}

function normalizedLogParams(params: any[]): IfaNormalizedParams {
  const [markName, ...values] = params;

  return {
    markName,
    values,
  };
}

export function customConsoleMixin(ConsoleLog: any): void {
  ConsoleLog.prototype.log = (...pryload: any[]): void => {
    if (!ConsoleLog.config.silent) {
      return;
    }
    const { markName, values } = normalizedLogParams(pryload);
    log(markName, ConsoleLog.config.splitter, ...values);
  };

  ConsoleLog.prototype.error = (...pryload: any[]): void => {
    if (!ConsoleLog.config.silent) {
      return;
    }
    const { markName, values } = normalizedLogParams(pryload);
    error(markName, ConsoleLog.config.splitter, ...values);
  };

  ConsoleLog.prototype.warn = (...pryload: any[]): void => {
    if (!ConsoleLog.config.silent) {
      return;
    }
    const { markName, values } = normalizedLogParams(pryload);
    warn(markName, ConsoleLog.config.splitter, ...values);
  };
}

export const customConsole = {
  log,
  error,
  warn,
};
