import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const ringColor: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => {
	const themeColors = theme('colors');
	return {
		...themeColors.common,
		...themeColors.bg,
	};
};
