import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const maxWidth:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
    ...theme('percents'),
    auto: 'auto',
})