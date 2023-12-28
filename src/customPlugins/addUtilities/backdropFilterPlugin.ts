import type { PluginCreator } from "tailwindcss/types/config";
let cssBackdropFilterValue = [
  "var(--tw-backdrop-blur)",
  "var(--tw-backdrop-brightness)",
  "var(--tw-backdrop-contrast)",
  "var(--tw-backdrop-grayscale)",
  "var(--tw-backdrop-hue-rotate)",
  "var(--tw-backdrop-invert)",
  "var(--tw-backdrop-opacity)",
  "var(--tw-backdrop-saturate)",
  "var(--tw-backdrop-sepia)",
].join(" ");
export const backdropFilterPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".backdrop-filter": {
      "@defaults backdrop-filter": {},
      "backdrop-filter": cssBackdropFilterValue,
    },
    ".backdrop-filter-none": { "backdrop-filter": "none" },
  });
};
