import { describe, it, expect } from 'vitest'
import { multiply } from '../../src/math/multiply'

describe('multiply', () => {
  it('应该正确计算两个数的积', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(1, 1)).toBe(1)
  })

  it('应该正确计算多个数的积', () => {
    expect(multiply(2, 3, 4)).toBe(24)
    expect(multiply(1, 2, 3, 4, 5)).toBe(120)
  })

  it('应该处理空参数返回1', () => {
    expect(multiply()).toBe(1)
  })

  it('应该处理单个数', () => {
    expect(multiply(42)).toBe(42)
  })

  it('应该正确处理负数', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
    expect(multiply(2, -3, -4)).toBe(24)
  })

  it('应该处理小数', () => {
    expect(multiply(0.5, 0.2)).toBeCloseTo(0.1)
  })
})
