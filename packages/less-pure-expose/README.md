# LESS ESModule

用于纯导出less接口，而非创建一个编译器工具。

优化点：
- 移除第三方依赖，从而可以实现完全的ESModule

## 使用方法

```js
import createLessCompiler from '//unpkg.com/less-pure-expose/es/web/index.js'

// options: https://lesscss.org/usage/#using-less-in-the-browser-options
const less = createLessCompiler(options)
// renderOptions: https://lesscss.org/usage/#programmatic-usage
const output = await less.render(lessText, renderOptions)
```
