## miniprogram-tailwind-preset

在微信小程序中使用tailwindcss( 3.4.4 )时的预设文件.

### 特性

- 兼容大多数原生写法
- 关闭与小程序不兼容的默认插件,对应的自定义插件替换
- 修改默认separator为`_`

### 安装

`npm i miniprogram-tailwind-preset --save-dev`

### 配置

```ts
// tailwind.config.js
// import type { Config } from "tailwindcss";
import { preset } from "./miniprogram-tailwind-preset";
export default {
  content: ["your/wxml/files"],
  presets: [preset],
  // ...
}; // satisfies Config;
```

### 监控并编译

```json
// package.json
{
  "devDependencies": {
    "miniprogram-tailwind-preset": "^0.6.0"
  },
  "scripts": {
    "tw": "tailwindcss -o ./tailwind.out.wxss --watch"
  }
  // ...
}
```

### 导入到app.wxss

```css
/* app.wxss */
@import "./tailwind.out.wxss"
```

### 关闭的默认插件

- preflight: false, // 不支持 `*` 选择器等不兼容的基础样式
- container: false, // 不符合小程序的设计规范,如需要使用可自定义的媒体查询
- placeholderColor: false, // 不支持::placeholder选择器,小程序中使用placeholder-class代替
- placeholderOpacity: false, // 不支持::placeholder选择器,小程序中使用placeholder-class代替
- divideColor: false, // 不支持 :not 选择器
- divideOpacity: false, // 不支持 :not 选择器
- divideStyle: false, // 不支持 :not 选择器
- divideWidth: false, // 不支持 :not 选择器
- backdropFilter: false, // 不支持 `*` 选择器,通过 backdropFilterPlugin 重新定义
- filter: false, // 不支持 `*` 选择器,通过 filterPlugin 重新定义
- ringWidth: false, // 不支持 `*` 选择器,通过 ringWidthPlugin 重新定义
- boxShadow: false, // 不支持 `*` 选择器,通过 boxShadowPlugin 重新定义
- fontVariantNumeric: false, // 不支持 `*` 选择器,通过 fontVariantNumericPlugin 重新定义
- gradientColorStops: false, // 不支持 `*` 选择器,通过 gradientColorStopsPlugin 重新定义
- scrollSnapType: false, // 不支持 `*` 选择器,通过 scrollSnapTypePlugin 重新定义
- touchAction: false, // 不支持 `*` 选择器,通过 touchActionPlugin 重新定义
- transform: false, // 不支持 `*` 选择器,通过 transformPlugin 重新定义
- borderSpacing: false, // 不支持 `*` 选择器,通过 borderSpacingPlugin 重新定义
- contain: false, // 不支持 `*` 选择器,通过 containPlugin 重新定义

### 自定义主题

- 见[配置文件](dist/index.js)

### 自定义插件

- [preflight](dist/customPlugins/preflight.js)
- [backdropFilter](dist/customPlugins/backdropFilter.js)
- [filter](dist/customPlugins/filter.js)
- [ringWidth](dist/customPlugins/ringWidth.js)
- [boxShadow](dist/customPlugins/boxShadow.js)
- [fontVariantNumeric](dist/customPlugins/fontVariantNumeric.js)
- [gradientColorStops](dist/customPlugins/gradientColorStops.js)
- [scrollSnapType](dist/customPlugins/scrollSnapType.js)
- [touchAction](dist/customPlugins/touchAction.js)
- [transform](dist/customPlugins/transform.js)
- [borderSpacing](dist/customPlugins/borderSpacing.js)
- [contain](dist/customPlugins/contain.js)

### 不同于原生实体类的写法

- 任意值写法 (arbitrary values)
  类样式: w-[100rpx]
  编译结果: .my-\[100rpx\]{ width:100rpx }
  是否报错: 是
  是否关闭: 未关闭
  测试版本库:截至3.2.5
  原因: wxml属性字段不支持`[]`,会把`[]`变为空格,wxss 不支持转义符`\`导致报错 `.w-\[100px\]`
  替代方案: 对应主题加入1-750rpx映射值
  替代类样式:w-100
  编译后: .w-100 { width: 100rpx }
