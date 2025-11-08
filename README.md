# Fun Lib Demo

一个轻量级的 JavaScript 库封装示例。

## 特性

- 🚀 **轻量级**: 零依赖，体积小
- 🎯 **TypeScript**: 完整的类型支持
- 📦 **双构建模式**: 支持 ESM 和 UMD
- 🧪 **完整测试**: 100% 测试覆盖率
- 🔧 **现代化工具链**: ESLint, Vitest, Git Hooks

## 安装

```bash
npm install fun-lib-demo
```

或使用 pnpm:

```bash
pnpm add fun-lib-demo
```

## 使用方法

### 基本用法

```javascript
import { add, subtract, multiply, divide, modulus, factorial } from 'fun-lib-demo'

// 加法
console.log(add(1, 2, 3)) // 6

// 减法
console.log(subtract(10, 3, 2)) // 5

// 乘法
console.log(multiply(2, 3, 4)) // 24

// 除法
console.log(divide(100, 2, 5)) // 10

// 取模
console.log(modulus(10, 3)) // 1

// 阶乘
console.log(factorial(5)) // 120
```

### CommonJS 用法

```javascript
const { add, subtract, multiply, divide, modulus, factorial } = require('fun-lib-demo')

// 加法
console.log(add(1, 2, 3)) // 6
```

## API 文档

### `add(...numbers: number[]): number`

计算多个数字的和。

**参数:**
- `numbers` - 要相加的数字

**返回值:** 所有数字的和

**示例:**
```javascript
add(1, 2, 3) // 6
add(10, -5, 3) // 8
```

### `subtract(...numbers: number[]): number`

从第一个数字开始依次减去后续数字。

**参数:**
- `numbers` - 要计算的数字

**返回值:** 计算结果

**示例:**
```javascript
subtract(10, 3, 2) // 5
subtract(100, 50, 25) // 25
```

### `multiply(...numbers: number[]): number`

计算多个数字的乘积。

**参数:**
- `numbers` - 要相乘的数字

**返回值:** 所有数字的乘积

**示例:**
```javascript
multiply(2, 3, 4) // 24
multiply(5, 2, 3) // 30
```

### `divide(...numbers: number[]): number`

从第一个数字开始依次除以后续数字。

**参数:**
- `numbers` - 要计算的数字

**返回值:** 计算结果

**示例:**
```javascript
divide(100, 2, 5) // 10
divide(144, 12, 2) // 6
```

### `modulus(a: number, b: number): number`

计算两个数字的余数。

**参数:**
- `a` - 被除数
- `b` - 除数

**返回值:** 余数

**示例:**
```javascript
modulus(10, 3) // 1
modulus(15, 4) // 3
```

### `factorial(n: number): number`

计算数字的阶乘。

**参数:**
- `n` - 要计算阶乘的数字

**返回值:** 阶乘结果

**示例:**
```javascript
factorial(5) // 120
factorial(3) // 6
```

## 开发

### 安装依赖

```bash
pnpm install
```

### 运行测试

```bash
pnpm test
```

### 构建项目

```bash
pnpm build
```

### 代码检查

```bash
pnpm lint
```

## 脚本命令

- `pnpm build` - 构建主包
- `pnpm build:packages` - 构建分包
- `pnpm test` - 运行测试
- `pnpm test:run` - 运行测试一次
- `pnpm lint` - 代码检查和自动修复
- `pnpm lint:check` - 仅检查代码问题
- `pnpm publish` - 发布主包
- `pnpm publish-packages` - 发布所有分包

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

详见 [CHANGELOG.md](./CHANGELOG.md)