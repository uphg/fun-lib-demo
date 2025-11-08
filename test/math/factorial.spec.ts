import { describe, it, expect } from 'vitest'
import { factorial } from '../../src/math/factorial'

describe('factorial', () => {
  it('应该正确计算阶乘', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
    expect(factorial(5)).toBe(120)
  })

  it('应该正确计算大数的阶乘', () => {
    expect(factorial(10)).toBe(3628800)
  })

  it('负数应该抛出错误', () => {
    expect(() => factorial(-1)).toThrow('阶乘参数必须是非负整数')
    expect(() => factorial(-5)).toThrow('阶乘参数必须是非负整数')
  })

  it('非整数应该抛出错误', () => {
    expect(() => factorial(1.5)).toThrow('阶乘参数必须是非负整数')
    expect(() => factorial(3.14)).toThrow('阶乘参数必须是非负整数')
  })

  it('整数类型的数字应该正常工作', () => {
    expect(factorial(6.0)).toBe(720) // 6.0 是整数
  })
})
