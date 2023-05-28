import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const width:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
    ...theme('percents')
})