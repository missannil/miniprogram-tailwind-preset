import type { PluginCreator } from 'tailwindcss/types/config';

export const baseStyle: PluginCreator = ({ addBase }) => {
	addBase({
		'view,[class]': { 'box-sizing': 'border-box'},
	});
};
