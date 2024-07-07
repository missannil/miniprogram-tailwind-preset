import type { PluginCreator } from "tailwindcss/types/config";

export const contain: PluginCreator = ({ addUtilities }) => {
  let cssContainValue =
    "var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)";
  //   addDefaults('contain', {
  //     '--tw-contain-size': ' ',
  //     '--tw-contain-layout': ' ',
  //     '--tw-contain-paint': ' ',
  //     '--tw-contain-style': ' ',
  //   })
  addUtilities({
    ".contain-none": { contain: "none" },
    ".contain-content": { contain: "content" },
    ".contain-strict": { contain: "strict" },
    ".contain-size": {
      "@defaults contain": {},
      "--tw-contain-size": "size",
      contain: cssContainValue,
    },
    ".contain-inline-size": {
      "@defaults contain": {},
      "--tw-contain-size": "inline-size",
      contain: cssContainValue,
    },
    ".contain-layout": {
      "@defaults contain": {},
      "--tw-contain-layout": "layout",
      contain: cssContainValue,
    },
    ".contain-paint": {
      "@defaults contain": {},
      "--tw-contain-paint": "paint",
      contain: cssContainValue,
    },
    ".contain-style": {
      "@defaults contain": {},
      "--tw-contain-style": "style",
      contain: cssContainValue,
    },
  });
};
