import type { PluginCreator } from "tailwindcss/types/config";
export const scrollSnapTypePlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".snap-none": { "scroll-snap-type": "none" },
    ".snap-x": {
      "@defaults scroll-snap-type": {},
      "scroll-snap-type": "x var(--tw-scroll-snap-strictness)",
    },
    ".snap-y": {
      "@defaults scroll-snap-type": {},
      "scroll-snap-type": "y var(--tw-scroll-snap-strictness)",
    },
    ".snap-both": {
      "@defaults scroll-snap-type": {},
      "scroll-snap-type": "both var(--tw-scroll-snap-strictness)",
    },
    ".snap-mandatory": { "--tw-scroll-snap-strictness": "mandatory" },
    ".snap-proximity": { "--tw-scroll-snap-strictness": "proximity" },
  });
};
