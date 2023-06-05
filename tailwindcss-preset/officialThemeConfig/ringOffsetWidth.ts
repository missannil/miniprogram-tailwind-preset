import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const ringOffsetWidth: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
	DEFAULT: '6rpx',
	...theme('spacing'),
});
