import { describe, it, expect } from 'vitest'
import { divide } from '../../src/math/divide'

describe('divide', () => {
  it('应该正确计算两个数的商', () => {
    expect(divide(6, 2)).toBe(3)
    expect(divide(10, 5)).toBe(2)
    expect(divide(0, 5)).toBe(0)
  })

  it('应该正确处理小数', () => {
    expect(divide(1, 2)).toBe(0.5)
    expect(divide(0.3, 0.1)).toBeCloseTo(3)
  })

  it('应该正确处理负数', () => {
    expect(divide(-6, 2)).toBe(-3)
    expect(divide(6, -2)).toBe(-3)
    expect(divide(-6, -2)).toBe(3)
  })

  it('除数为零时应该抛出错误', () => {
    expect(() => divide(5, 0)).toThrow('除数不能为零')
    expect(() => divide(0, 0)).toThrow('除数不能为零')
    expect(() => divide(-5, 0)).toThrow('除数不能为零')
  })
})
