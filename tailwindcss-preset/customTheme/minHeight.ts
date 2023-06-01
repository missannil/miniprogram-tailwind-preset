import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const minHeight:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
    ...theme('percents'),
    auto: 'auto',
})