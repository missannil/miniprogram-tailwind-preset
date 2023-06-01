import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const minWidth:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
    ...theme('percents'),
    auto: 'auto',
})