import type { PluginCreator } from "tailwindcss/types/config";
import { createValue } from "../../utils/createValue";
import { flattenColorPalette } from "../../utils/flattenColorPalette";
import { isEmptyObject } from "../../utils/isEmptyObject";
export const borderColorPlugin: PluginCreator = ({ addUtilities, theme }) => {
  const defaultTheme: object = theme("colors");
  const variableColors: {
    text: Record<string, Record<string, string>>;
    common: Record<string, Record<string, string>>;
  } = theme("variableColors");
  const colorsTheme = isEmptyObject(defaultTheme)
    ? Object.assign(variableColors.common, variableColors.text)
    : defaultTheme;
  console.log(colorsTheme);
  addUtilities({
    ...createValue(
      flattenColorPalette(colorsTheme),
      "border",
      "borderColor",
    ),
  });
};
