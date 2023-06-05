import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const removeAddDefaultsgradientColorStops: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
	...theme('colors').bg,
});
