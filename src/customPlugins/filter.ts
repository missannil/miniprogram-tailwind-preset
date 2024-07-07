import type { PluginCreator } from "tailwindcss/types/config";
let cssFilterValue = [
  "var(--tw-blur)",
  "var(--tw-brightness)",
  "var(--tw-contrast)",
  "var(--tw-grayscale)",
  "var(--tw-hue-rotate)",
  "var(--tw-invert)",
  "var(--tw-saturate)",
  "var(--tw-sepia)",
  "var(--tw-drop-shadow)",
].join(" ");
export const filter: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".filter": { "@defaults filter": {}, filter: cssFilterValue },
    ".filter-none": { filter: "none" },
  });
};
