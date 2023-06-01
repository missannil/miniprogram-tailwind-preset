import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
export const lineHeight: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
	none: '1',
	tight: '1.25',
	snug: '1.375',
	normal: '1.5',
	relaxed: '1.625',
	loose: '2',
	...theme('spacing'),
});
