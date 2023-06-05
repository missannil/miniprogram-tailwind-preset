import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const borderRadius: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
    ...theme('spacing'),
    ...theme('percents'),
});
