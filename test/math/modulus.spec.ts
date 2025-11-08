import { describe, it, expect } from 'vitest'
import { modulus } from '../../src/math/modulus'

describe('modulus', () => {
  it('应该正确计算两个数的余数', () => {
    expect(modulus(10, 3)).toBe(1)
    expect(modulus(10, 2)).toBe(0)
    expect(modulus(5, 3)).toBe(2)
  })

  it('应该正确处理负数', () => {
    expect(modulus(-10, 3)).toBe(-1)
    expect(modulus(10, -3)).toBe(1)
    expect(modulus(-10, -3)).toBe(-1)
  })

  it('应该处理小数', () => {
    expect(modulus(5.5, 2)).toBeCloseTo(1.5)
  })

  it('除数为零时应该抛出错误', () => {
    expect(() => modulus(5, 0)).toThrow('除数不能为零')
    expect(() => modulus(0, 0)).toThrow('除数不能为零')
    expect(() => modulus(-5, 0)).toThrow('除数不能为零')
  })
})
