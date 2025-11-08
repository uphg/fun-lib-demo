/**
 * 加法运算
 * @param numbers - 要相加的数字
 * @returns 所有数字的和
 */
export function add(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0)
}
