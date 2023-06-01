import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const borderWidth:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
})
