import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const placeholderColor: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
    ...theme('colors').text,
});