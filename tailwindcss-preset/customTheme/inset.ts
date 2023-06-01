import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const inset:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    ...theme('spacing'),
})