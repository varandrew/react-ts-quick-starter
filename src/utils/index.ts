/**
 * @description: 延迟
 * @param {number} ms
 * @return {*}
 */
export const sleep = (ms: number): any => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * @description: uuid生成
 * @param {*}
 * @return {string}
 */
export const UUIDGeneratorBrowser = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    // eslint-disable-next-line no-bitwise
    const random = (Math.random() * 16) | 0 // Nachkommastellen abschneiden
    const value = char === 'x' ? random : (random % 4) + 8 // Bei x Random 0-15 (0-F), bei y Random 0-3 + 8 = 8-11 (8-b) gemäss RFC 4122
    return value.toString(16) // Hexadezimales Zeichen zurückgeben
  })
}
