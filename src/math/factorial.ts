/**
 * 计算阶乘
 * @param n - 非负整数
 * @returns n 的阶乘
 * @throws 当 n 不是非负整数时抛出错误
 */
export function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('阶乘参数必须是非负整数')
  }

  if (n === 0 || n === 1) return 1

  // 使用递归或迭代方式计算阶乘
  return Array.from({ length: n }, (_, i) => i + 1)
    .reduce((acc, curr) => acc * curr, 1)
}
