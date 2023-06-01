import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const stroke:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
      none: 'none',
      ...theme('colors').bg,
})