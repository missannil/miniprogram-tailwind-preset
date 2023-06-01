import type { PluginCreator } from 'tailwindcss/types/config';
import { createValue } from '../../utils/createValue';
import { flattenColorPalette } from '../../utils/flattenColorPalette';
export const caretColorPlugin: PluginCreator = ({ addUtilities, theme }) => {
	const colorsTheme: {
		text: Record<string, Record<string, string>>;
		common: Record<string, Record<string, string>>;
	} = theme('colors');
	addUtilities({
		...createValue(
			Object.assign(
				flattenColorPalette(colorsTheme.common),
				flattenColorPalette(colorsTheme.text)
			),
			'caret',
			'caretColor'
		),
	});
};
