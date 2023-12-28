# miniprogram-tailwind-preset

在微信小程序中使用tailwindcss( 3.4.0 )时的预设文件

### 安装

`npm i miniprogram-tailwind-preset --save-dev`

### 配置

```ts
// tailwind.config.js
// import type { Config } from "tailwindcss";
import { preset } from "./src";
export default {
  content: ["your/wxml/files"],
  presets: [preset],
  // ...
}; // satisfies Config;
```

### 关闭的插件

    preflight: false, // 与小程序不兼容的基础样式
    container: false, // https://tailwindcss.com/docs/container
    accessibility: false, // 无障碍https://tailwindcss.com/docs/preflight#accessibility-considerations
    placeholderColor: false, // 不支持::placeholder选择器,使用placeholder-class代替
    placeholderOpacity: false, // 不支持::placeholder选择器,使用placeholder-class代替
    // borderColor: false,
    divideColor: false, //   不支持 :not 选择器
    divideOpacity: false, //   不支持 :not 选择器
    divideStyle: false, //   不支持 :not 选择器
    divideWidth: false, //   不支持 :not 选择器
    backdropFilter: false, // 不支持 * 选择器
    filter: false, // 不支持 * 选择器  有自定义插件替换
    ringWidth: false, // 不支持 * 选择器 有自定义插件替换
    boxShadow: false, // 不支持 * 选择器 有自定义插件替换
    fontVariantNumeric: false, // 不支持 * 选择器 有自定义插件替换
    gradientColorStops: false, // 不支持 * 选择器 有自定义插件替换
    scrollSnapType: false, // 不支持 * 选择器 有自定义插件替换
    touchAction: false, // 不支持 * 选择器 有自定义插件替换
    transform: false, // 不支持 * 选择器 有自定义插件替换
    borderSpacing: false, // 不支持 * 选择器 有自定义插件替换

### 暂不支持的

- 任意值写法 (arbitrary values)
  类样式: w-[100rpx]
  编译结果: .my-\[200rpx\]{ width:100rpx }
  是否报错: 是
  是否关闭: 未关闭
  测试版本库:截至3.2.5
  原因: wxml属性字段不支持`[]`,会把`[]`变为空格,wxss 不支持转义符`\`导致报错 `.w-\[100px\]`
  替代方案: 对应主题加入1-750rpx映射值
  替代类样式:w-100
  编译后: .w-100 { width: 100rpx }

### 自定义插件

- [preflightPlugin](src/customPlugins/preflightPlugin.ts) 同原生插件(去除添加`*`选择器的addDefaults)

- [backdropFilterPlugin](src/customPlugins/preflightPlugin.ts) 同原生插件(去除添加`*`选择器的addDefaults)
- [filterPlugin](src/customPlugins/filterPlugin.ts) 同原生插件(去除添加`*`选择器的addDefaults)
- [ringWidthPlugin](src/customPlugins/ringWidthPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [boxShadowPlugin](src/customPlugins/boxShadowPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [fontVariantNumericPlugin](src/customPlugins/fontVariantNumericPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [gradientColorStopsPlugin](src/customPlugins/gradientColorStopsPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [scrollSnapTypePlugin](src/customPlugins/scrollSnapTypePlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [touchActionPlugin](src/customPlugins/touchActionPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [transformPlugin](src/customPlugins/transformPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
- [borderSpacingPlugin](src/customPlugins/borderSpacingPlugin.ts)同原生插件(去除添加`*`选择器的addDefaults)
-
