import { describe, it, expect } from 'vitest'
import { subtract } from '../../src/math/subtract'

describe('subtract', () => {
  it('应该正确计算两个数的差', () => {
    expect(subtract(5, 3)).toBe(2)
    expect(subtract(10, 5)).toBe(5)
    expect(subtract(0, 0)).toBe(0)
  })

  it('应该正确处理负数', () => {
    expect(subtract(-3, -5)).toBe(2)
    expect(subtract(5, -3)).toBe(8)
    expect(subtract(-5, 3)).toBe(-8)
  })

  it('应该处理小数', () => {
    expect(subtract(0.5, 0.2)).toBeCloseTo(0.3)
  })
})
