import type { Config } from 'tailwindcss/types/config';
import { addBase } from './customPlugins/addBase';
import { addComopnents } from './customPlugins/addComponents';
import { backgroundColorPlugin } from './customPlugins/addUtilities/backgroundColorPlugin';
import { borderColorPlugin } from './customPlugins/addUtilities/borderColorPlugin';
import { boxShadowPlugin } from './customPlugins/addUtilities/boxShadowPlugin';
import { caretColorPlugin } from './customPlugins/addUtilities/caretColorPlugin';
import { fillPlugin } from './customPlugins/addUtilities/fillPlugin';
import { fontVariantNumericPlugin } from './customPlugins/addUtilities/fontVariantNumericPlugin';
import { gradientColorStopsPlugin } from './customPlugins/addUtilities/gradientColorStopsPlugin';
import { placeholderColorPlugin } from './customPlugins/addUtilities/placeholderColorPlugin';
import { ringColorPlugin } from './customPlugins/addUtilities/ringColorPlugin';
import { ringWidthPlugin } from './customPlugins/addUtilities/ringWidthPluginPlugin';
import { textColorPulgin } from './customPlugins/addUtilities/textColorPlugin';
import { transformPlugin } from './customPlugins/addUtilities/transformPlugin';
import { corePlugins } from './customCorePlugins';
import { backdropBlur } from './officialThemeConfig/backdropBlur';
import { blur } from './officialThemeConfig/blur';
import { borderRadius } from './officialThemeConfig/borderRadius';
import { borderWidth } from './officialThemeConfig/borderWidth';
import { flexBasis } from './officialThemeConfig/flexBasis';
import { fontSize } from './officialThemeConfig/fontSize';
import { gradientColorStopPositions } from './officialThemeConfig/gradientColorStopPositions';
import { height } from './officialThemeConfig/height';
import { inset } from './officialThemeConfig/inset';
import { lineHeight } from './officialThemeConfig/lineHeight';
import { maxHeight } from './officialThemeConfig/maxHeight';
import { maxWidth } from './officialThemeConfig/maxWidth';
import { minHeight } from './officialThemeConfig/minHeight';
import { minWidth } from './officialThemeConfig/minWidth';
import { percents } from './officialThemeConfig/percents';
import { removeAddDefaultsgradientColorStops } from './officialThemeConfig/removeAddDefaultsgradientColorStops';
import { ringOffsetColor } from './officialThemeConfig/ringOffsetColor';
import { ringOffsetWidth } from './officialThemeConfig/ringOffsetWidth';
import { rotate } from './officialThemeConfig/rotate';
import { skew } from './officialThemeConfig/skew';
import { spacing } from './officialThemeConfig/spacing';
import { stroke } from './officialThemeConfig/stroke';
import { translate } from './officialThemeConfig/translate';
import { variableColors } from './officialThemeConfig/variableColors';
import { width } from './officialThemeConfig/width';
export const preset: Config = {
	content: [],
	separator: '_',
	corePlugins,
	theme: {
		percents,
		spacing,
		width,
		height,
		fontSize,
		variableColors,
		borderWidth,
		borderRadius,
		flexBasis,
		minWidth,
		maxWidth,
		minHeight,
		maxHeight,
		translate,
		backdropBlur,
		blur,
		inset,
		lineHeight,
		gradientColorStopPositions,
		removeAddDefaultsgradientColorStops,
		ringOffsetWidth,
		ringOffsetColor,
		rotate,
		skew,
		stroke,
	},
	plugins: [
		addBase,
		addComopnents,
		borderColorPlugin,
		textColorPulgin,
		backgroundColorPlugin,
		boxShadowPlugin,
		caretColorPlugin,
		fillPlugin,
		gradientColorStopsPlugin,
		ringWidthPlugin,
		ringColorPlugin,
		transformPlugin,
		fontVariantNumericPlugin,
		placeholderColorPlugin,
	],
};
