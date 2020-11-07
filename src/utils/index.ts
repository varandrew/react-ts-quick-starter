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

/**
 * @description: 展示http信息
 * @param {number} status http code
 * @return {*}
 */
export const showHttpStatus = (status: number): string => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}
