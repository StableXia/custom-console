function formatErrorMessage(): null {
  return null
}

export function catchWindowError(handleError): void {
  window.onerror = function (
    message: string,
    source: string,
    lineno: number,
    colno: number,
    error: error
  ): boolean {
    console.log('捕获到异常：', { message, source, lineno, colno, error })
    handleError({ message, source, lineno, colno, error })
    return true
  }
}
