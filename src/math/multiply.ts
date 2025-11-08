/**
 * 乘法运算
 * @param numbers - 要相乘的数字
 * @returns 所有数字的乘积
 */
export function multiply(...numbers: number[]): number {
  return numbers.reduce((product, num) => product * num, 1)
}
