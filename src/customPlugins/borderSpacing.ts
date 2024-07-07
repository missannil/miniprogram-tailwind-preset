import type { PluginCreator } from "tailwindcss/types/config";
export const borderSpacing: PluginCreator = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "border-spacing": (value) => {
        return {
          "--tw-border-spacing-x": value,
          "--tw-border-spacing-y": value,
          "@defaults border-spacing": {},
          "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
        };
      },
      "border-spacing-x": (value) => {
        return {
          "--tw-border-spacing-x": value,
          "@defaults border-spacing": {},
          "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
        };
      },
      "border-spacing-y": (value) => {
        return {
          "--tw-border-spacing-y": value,
          "@defaults border-spacing": {},
          "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
        };
      },
    },
    // @ts-ignore
    { values: theme("borderSpacing") },
  );
};
