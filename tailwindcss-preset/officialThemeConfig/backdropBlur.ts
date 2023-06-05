import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config';

export const backdropBlur: ResolvableTo<KeyValuePair<string, string>> = ({
	theme,
}) => ({
    ...theme('spacing'),
});
