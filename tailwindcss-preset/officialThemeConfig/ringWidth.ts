import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

export const ringWidth:ResolvableTo<KeyValuePair<string, string>> = ({theme})=>({
    DEFAULT:"6rpx",
    ...theme('spacing'),
})