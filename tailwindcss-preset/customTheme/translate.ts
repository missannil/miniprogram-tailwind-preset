import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const translate:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
    ...theme('percents'),

})