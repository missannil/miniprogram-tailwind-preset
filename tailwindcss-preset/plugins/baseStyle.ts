import type { PluginCreator } from 'tailwindcss/types/config';

export const baseStyle: PluginCreator = ({ addBase, theme }) => {
	addBase({
		'view,[class]': { 'box-sizing': 'border-box', color: 'blue' },
	});
};
