import type { CorePluginList } from 'tailwindcss/types/generated/corePluginList';

export const corePlugins: CorePluginList[] = [
	/**
	 * 自定义plugin取代的
	 */
	// 'backgroundColor',//多主题颜色方案
	// 'borderColor',//多主题颜色方案
	// 'textColor',//多主题颜色方案
	// 'caretColor',//多主题颜色方案
	// 'ringColor'//多主题颜色方案,
	// "fill", //多主题颜色方案
	// "boxShadow",//带*号
	// "gradientColorStops",//带*号
	// "transform",// 带*号
	// "ringWidth",//带*号
	// "fontVariantNumeric",// 带*号
	/**
	 * 正常兼容小程序的
	 */
	//--------主题(配置)被修改开始---------
	'width',
	'height',
	'flexBasis',
	'fontSize',
	'borderWidth',
	'borderRadius',
	'stroke',
	'skew',
	'rotate',
	'ringOffsetColor',
	'ringOffsetWidth',
	'lineHeight',
	'backdropBlur',
	'inset',
	'translate',
	'blur',
	'maxHeight',
	'maxWidth',
	'minHeight',
	'minWidth',
	// 'placeholderColor', //小程序暂不支持::placeholder选择器,但不报错,预留着

	//--------主题配置被修改结束---------
	'display',
	'flex',
	'flexShrink',
	'flexGrow',
	'flexDirection',
	'flexWrap',
	'justifyContent',
	'justifyItems',
	'justifySelf',
	'padding',
	'margin',
	'overflow',
	'fontStyle',
	'fontWeight',
	'fontSmoothing',
	'textAlign',
	'textDecoration', // no-underline 小程序不支持 但不报错
	'textOverflow',
	'textTransform',
	'alignContent',
	'alignItems',
	'alignSelf',
	'backgroundAttachment',
	'backgroundClip',
	'backgroundImage',
	'backgroundOrigin',
	'backgroundPosition',
	'backgroundRepeat',
	'backgroundSize',
	'backgroundBlendMode',
	'borderCollapse',
	'borderStyle',
	'whitespace',
	'animation',
	'position',
	'appearance',
	'zIndex',
	'visibility',
	'backdropBrightness',
	'backdropContrast',
	'backdropGrayscale',
	'backdropHueRotate',
	'backdropInvert',
	'backdropOpacity',
	'backdropSaturate',
	'backdropSepia',
	'boxDecorationBreak',
	'boxSizing',
	'float',
	'brightness',
	'clear',
	'content',
	'contrast',
	'cursor',
	'dropShadow',
	'gap',
	'grayscale',
	'gridAutoColumns',
	'gridAutoFlow',
	'gridAutoRows',
	'gridColumn',
	'gridColumnEnd',
	'gridColumnStart',
	'gridRow',
	'gridRowEnd',
	'gridRowStart',
	'gridTemplateColumns',
	'gridTemplateRows',
	'opacity',
	'hueRotate',
	'invert',
	'isolation',
	'letterSpacing',
	'listStylePosition',
	'listStyleType',
	'mixBlendMode',
	'objectFit',
	'objectPosition',
	'order',
	'overscrollBehavior',
	'placeContent',
	'placeItems',
	'placeSelf',
	'pointerEvents',
	'resize',
	'saturate',
	'scale',
	'sepia',
	'strokeWidth',
	'tableLayout',
	'transformOrigin',
	'transitionDelay',
	'transitionDuration',
	'transitionProperty',
	'transitionTimingFunction',
	'userSelect',
	'verticalAlign',
	'wordBreak',
	/**
	 * 关闭的
	 */
	// "preflight",//与小程序不兼容的基础样式
	// "container",//https://tailwindcss.com/docs/container
	// "accessibility",//无障碍https://tailwindcss.com/docs/preflight#accessibility-considerations
	// "backdropFilter",// 2.1主题3改了，有*
	// "filter",//2.1主题3改了，有*
	// "ringOpacity",//2+主题3后没用
	// "divideColor",  //  小程序 不支持 :not 选择器
	// "divideOpacity",//  小程序 不支持 :not 选择器
	// "divideStyle",  //   小程序不支持 :not 选择器
	// "divideWidth",   //   小程序不支持 :not 选择器
	// 'placeholderOpacity', //不适合多主题
	// 'textOpacity', // 2中主题3取消用"/",
	// 'backgroundOpacity',// 2中主题3取消用"/",
	// 'borderOpacity',// 2中主题3取消用"/",
];
