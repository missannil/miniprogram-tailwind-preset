import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const maxHeight:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
    ...theme('percents'),
    auto: 'auto',
})