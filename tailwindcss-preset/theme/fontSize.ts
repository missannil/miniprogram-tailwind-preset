import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const fontSize:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing')
})