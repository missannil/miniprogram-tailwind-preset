import type { Config } from 'tailwindcss/types/config';
import { corePlugins } from './corePlugins';
import { backdropBlur } from './customTheme/backdropBlur';
import { blur } from './customTheme/blur';
import { borderRadius } from './customTheme/borderRadius';
import { borderWidth } from './customTheme/borderWidth';
import { flexBasis } from './customTheme/flexBasis';
import { fontSize } from './customTheme/fontSize';
import { gradientColorStopPositions } from './customTheme/gradientColorStopPositions';
import { height } from './customTheme/height';
import { inset } from './customTheme/inset';
import { lineHeight } from './customTheme/lineHeight';
import { maxHeight } from './customTheme/maxHeight';
import { maxWidth } from './customTheme/maxWidth';
import { minHeight } from './customTheme/minHeight';
import { minWidth } from './customTheme/minWidth';
import { percents } from './customTheme/percents';
import { variableColors } from './customTheme/variableColors';

import { removeAddDefaultsgradientColorStops } from './customTheme/removeAddDefaultsgradientColorStops';
import { ringOffsetColor } from './customTheme/ringOffsetColor';
import { ringOffsetWidth } from './customTheme/ringOffsetWidth';
import { rotate } from './customTheme/rotate';
import { skew } from './customTheme/skew';
import { spacing } from './customTheme/spacing';
import { stroke } from './customTheme/stroke';
import { translate } from './customTheme/translate';
import { width } from './customTheme/width';
import { addBase } from './plugins/addBase';
import { addComopnents } from './plugins/addComponents';
import { backgroundColorPlugin } from './plugins/addUtilities/backgroundColorPlugin';
import { borderColorPlugin } from './plugins/addUtilities/borderColorPlugin';
import { boxShadowPlugin } from './plugins/addUtilities/boxShadowPlugin';
import { caretColorPlugin } from './plugins/addUtilities/caretColorPlugin';
import { fillPlugin } from './plugins/addUtilities/fillPlugin';
import { fontVariantNumericPlugin } from './plugins/addUtilities/fontVariantNumericPlugin';
import { gradientColorStopsPlugin } from './plugins/addUtilities/gradientColorStopsPlugin';
import { placeholderColorPlugin } from './plugins/addUtilities/placeholderColorPlugin';
import { ringColorPlugin } from './plugins/addUtilities/ringColorPlugin';
import { ringWidthPlugin } from './plugins/addUtilities/ringWidthPluginPlugin';
import { textColorPulgin } from './plugins/addUtilities/textColorPlugin';
import { transformPlugin } from './plugins/addUtilities/transformPlugin';
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
		colors: {},
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
