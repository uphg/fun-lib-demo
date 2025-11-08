/**
 * 求余运算
 * @param a - 被除数
 * @param b - 除数
 * @returns a 除以 b 的余数
 * @throws 当除数为零时抛出错误
 */
export function modulus(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为零')
  }
  return a % b
}
