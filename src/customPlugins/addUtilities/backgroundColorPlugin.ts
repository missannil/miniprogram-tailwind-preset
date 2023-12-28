import type { PluginCreator } from "tailwindcss/types/config";
import { createValue } from "../../utils/createValue";
import { flattenColorPalette } from "../../utils/flattenColorPalette";
import { isEmptyObject } from "../../utils/isEmptyObject";
export const backgroundColorPlugin: PluginCreator = ({
  addUtilities,
  theme,
}) => {
  const defaultTheme: object = theme("colors");
  const variableColors: {
    bg: Record<string, Record<string, string>>;
    common: Record<string, Record<string, string>>;
  } = theme("variableColors");
  const colorsTheme = isEmptyObject(defaultTheme)
    ? Object.assign(variableColors.common, variableColors.bg)
    : defaultTheme;
  addUtilities({
    ...createValue(
      flattenColorPalette(colorsTheme),
      "bg",
      "backgroundColor",
    ),
  });
};
