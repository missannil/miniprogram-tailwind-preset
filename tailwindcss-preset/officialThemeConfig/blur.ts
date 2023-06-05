import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const blur: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
    ...theme('spacing'),
});