import type { Config } from 'tailwindcss/types/config';
import { corePlugins } from './corePlugins';
import { height } from './theme/height';
import { percents } from './theme/percents';
import { spacing } from './theme/spacing';
import { width } from './theme/width';
import { baseStyle } from './plugins/baseStyle';
import { fontSize } from './theme/fontSize';

export const preset: Config = {
	content: [],
	corePlugins,
	theme: {
		percents,
		spacing,
		width,
		height,
		fontSize,
	},
	plugins: [baseStyle],
};
