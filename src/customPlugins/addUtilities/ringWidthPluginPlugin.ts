import type { PluginCreator } from "tailwindcss/types/config";
export const ringWidthPlugin: PluginCreator = ({ matchUtilities, addUtilities, theme }) => {
  matchUtilities(
    {
      ring: (value) => {
        return {
          "@defaults ring-width": {},
          "--tw-ring-offset-shadow":
            `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
          "--tw-ring-shadow":
            `var(--tw-ring-inset) 0 0 0 calc(${value} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
          "box-shadow": [
            `var(--tw-ring-offset-shadow)`,
            `var(--tw-ring-shadow)`,
            `var(--tw-shadow, 0 0 #0000)`,
          ].join(", "),
        };
      },
    },
    // @ts-ignore
    { values: theme("ringWidth"), type: "length" },
  );

  addUtilities({
    ".ring-inset": { "@defaults ring-width": {}, "--tw-ring-inset": "inset" },
  });
};
