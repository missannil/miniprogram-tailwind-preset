import type { PluginCreator } from "tailwindcss/types/config";
export const transformPlugin: PluginCreator = ({ addUtilities }) => {
  let cssTransformValue = [
    "translate(var(--tw-translate-x), var(--tw-translate-y))",
    "rotate(var(--tw-rotate))",
    "skewX(var(--tw-skew-x))",
    "skewY(var(--tw-skew-y))",
    "scaleX(var(--tw-scale-x))",
    "scaleY(var(--tw-scale-y))",
  ].join(" ");
  addUtilities({
    ".transform": { transform: cssTransformValue },
    ".transform-cpu": {
      transform: cssTransformValue,
    },
    ".transform-gpu": {
      transform: cssTransformValue.replace(
        "translate(var(--tw-translate-x), var(--tw-translate-y))",
        "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)",
      ),
    },
    ".transform-none": { transform: "none" },
  });
};
