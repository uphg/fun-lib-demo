import { describe, it, expect } from 'vitest'
import { add } from '../../src/math/add'

describe('add', () => {
  it('应该正确计算两个数的和', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })

  it('应该正确计算多个数的和', () => {
    expect(add(1, 2, 3, 4, 5)).toBe(15)
    expect(add(-1, -2, -3)).toBe(-6)
  })

  it('应该处理空参数返回0', () => {
    expect(add()).toBe(0)
  })

  it('应该处理单个数', () => {
    expect(add(42)).toBe(42)
  })

  it('应该处理小数', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
