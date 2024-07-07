import type { PluginCreator } from "tailwindcss/types/config";
export const fontVariantNumeric: PluginCreator = ({ addUtilities }) => {
  let cssFontVariantNumericValue =
    "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";

  addUtilities({
    ".normal-nums": { "font-variant-numeric": "normal" },
    ".ordinal": {
      "@defaults font-variant-numeric": {},
      "--tw-ordinal": "ordinal",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".slashed-zero": {
      "@defaults font-variant-numeric": {},
      "--tw-slashed-zero": "slashed-zero",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".lining-nums": {
      "@defaults font-variant-numeric": {},
      "--tw-numeric-figure": "lining-nums",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".oldstyle-nums": {
      "@defaults font-variant-numeric": {},
      "--tw-numeric-figure": "oldstyle-nums",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".proportional-nums": {
      "@defaults font-variant-numeric": {},
      "--tw-numeric-spacing": "proportional-nums",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".tabular-nums": {
      "@defaults font-variant-numeric": {},
      "--tw-numeric-spacing": "tabular-nums",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".diagonal-fractions": {
      "@defaults font-variant-numeric": {},
      "--tw-numeric-fraction": "diagonal-fractions",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
    ".stacked-fractions": {
      "@defaults font-variant-numeric": {},
      "--tw-numeric-fraction": "stacked-fractions",
      "font-variant-numeric": cssFontVariantNumericValue,
    },
  });
};
