import type { CorePluginList } from "tailwindcss/types/generated/corePluginList";

export const corePlugins: CorePluginList[] = [
	"width", 
	"height", 
	// "alignContent",
	// "alignItems",
	// "alignSelf",
	// "backgroundColor",
	// "flex",
	// "flexDirection",
	// "flexGrow",
	// "flexShrink",
	// "flexWrap",
	// "display",
	// "padding", // 关联 spacing
	// "margin", // 关联 spacing
	// "overflow",
	// "fontSize", // 关联 spacing
	// "fontStyle",
	// "textColor", // 关联 colors
	// "textAlign",
	// "fontFamily",
	// "fontSmoothing",
	// "fontVariantNumeric", // addDefaults
	// "fontWeight",
	// "animation",
	// "maxWidth",
	// "minWidth"
	// "preflight", //
	// "container", //out
	// "accessibility", //out 无障碍
	// "appearance", //out
	// "translate", // 间距`.` 有 特殊字符 `\/`
	// "animation",
	// "backdropBlur", // backdrop-filter: blur(0);
	// "backdropBrightness",
	// "backdropContrast",
	// "backdropFilter",//addDefaults
	// "backdropGrayscale",
	// "backdropHueRotate",
	// "backdropInvert",
	// "backdropOpacity",
	// "backdropSaturate",
	// "backdropSepia",
	// "backgroundAttachment",
	// "backgroundBlendMode",
	// "backgroundClip",
	// "backgroundImage",
	// "backgroundOpacity",
	// "backgroundOrigin",
	// "backgroundPosition",
	// "backgroundRepeat",
	// "backgroundSize",
	// "blur",
	// "borderCollapse",
	// "borderColor",
	// "borderOpacity",
	// "borderRadius",
	// "borderStyle",
	// 'borderWidth', // customBorderWidth
	// "boxDecorationBreak",
	// "boxShadow", //addDefaults
	// "boxSizing",
	// "brightness",
	// "caretColor", // 光标颜色
	// "clear", // 清楚浮动
	// "content",
	// "contrast",
	// "cursor",

	// "divideColor"	  , // out 会产生not 小程序不认识错误 不支持 :not 选择器
	// "divideOpacity" ,// out 会产生not 小程序不认识错误 不支持 :not 选择器
	// "divideStyle"   ,// out 会产生not 小程序不认识错误 不支持 :not 选择器
	// "divideWidth"	  , // out 会产生not 小程序不认识错误 不支持 :not 选择器
	// "dropShadow",
	// "fill",
	// "filter",//addDefaults

	// "float",

	// "gap", // 继承自定义 spacing
	// "gradientColorStops",
	// "grayscale", // 产生 包含`\/.`的类名 比如 .gap-0\.5 {  gap: 0.125rem}
	// "gridAutoColumns",
	// "gridAutoFlow",
	// "gridAutoRows",
	// "gridColumn",
	// "gridColumnEnd",
	// "gridColumnStart",
	// "gridRow",
	// "gridRowEnd",
	// "gridRowStart",
	// "gridTemplateColumns",
	// "gridTemplateRows",

	// "hueRotate",
	// "inset", // 关联 spacing
	// "invert",
	// "isolation",
	// "justifyContent",
	// "justifyItems",
	// "justifySelf",
	// "letterSpacing",
	// "lineHeight",
	// "listStylePosition",
	// "listStyleType",

	// "maxHeight", // 继承自定义 spacing
	// 'maxWidth',//自定义覆盖
	// "minHeight",
	// "minWidth",
	// "mixBlendMode",
	// "objectFit",
	// "objectPosition",
	// "opacity",
	// "order",

	// "overscrollBehavior",

	// "placeContent",
	// "placeholderColor",
	// "placeholderOpacity",
	// "placeItems",
	// "placeSelf",
	// "pointerEvents",
	// "position",
	// "resize",
	// "ringColor",
	// "ringOffsetColor",
	// "ringOffsetWidth",
	// "ringOpacity",
	// "ringWidth", // 有 `*`
	// "rotate",
	// "saturate",
	// "scale",
	// "sepia",
	// "skew",
	// "space"	, // out 会产生not 小程序不认识错误 不支持 :not 选择器 , 间距 `.`
	// "stroke",
	// "strokeWidth",
	// "tableLayout",

	// "textDecoration",
	// "textOpacity",
	// "textOverflow",
	// "textTransform",
	// "transform",//addDefaults
	// "transformOrigin",
	// "transitionDelay",
	// "transitionDuration",
	// "transitionProperty",
	// "transitionTimingFunction",

	// "userSelect",
	// "verticalAlign",
	// "visibility",
	// "whitespace",
	// "width", // 继承自定义 spacing
	// "wordBreak",
	// "zIndex",
];
