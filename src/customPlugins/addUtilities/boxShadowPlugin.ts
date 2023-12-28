// @ts-nocheck
import type { PluginCreator } from "tailwindcss/types/config";
import { formatBoxShadowValue, parseBoxShadowValue } from "../../utils/parseBoxShadowValue";
import transformThemeValue from "../../utils/transformThemeValue";
let transformValue = transformThemeValue("boxShadow");
let defaultBoxShadow = [
  `var(--tw-ring-offset-shadow, 0 0 #0000)`,
  `var(--tw-ring-shadow, 0 0 #0000)`,
  `var(--tw-shadow)`,
].join(", ");
export const boxShadowPlugin: PluginCreator = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      shadow: (value) => {
        value = transformValue(value);

        let ast = parseBoxShadowValue(value);
        for (let shadow of ast) {
          // Don't override color if the whole shadow is a variable
          if (!shadow.valid) {
            continue;
          }

          shadow.color = "var(--tw-shadow-color)";
        }

        return {
          "@defaults box-shadow": {},
          "--tw-shadow": value === "none" ? "0 0 #0000" : value,
          "--tw-shadow-colored": value === "none" ? "0 0 #0000" : formatBoxShadowValue(ast),
          "box-shadow": defaultBoxShadow,
        };
      },
    },
    { values: theme("boxShadow"), type: ["shadow"] },
  );
};
