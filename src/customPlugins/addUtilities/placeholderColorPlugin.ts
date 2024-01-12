// import type { PluginCreator } from "tailwindcss/types/config";
// import { flattenColorPalette } from "../../utils/flattenColorPalette";
// import { isEmptyObject } from "../../utils/isEmptyObject";
// export const placeholderColorPlugin: PluginCreator = ({
//   theme,
//   matchUtilities,
// }) => {
//   const defaultTheme: object = theme("colors");
//   const variableColors: {
//     text: Record<string, Record<string, string>>;
//     common: Record<string, Record<string, string>>;
//   } = theme("variableColors");
//   const colorsTheme = isEmptyObject(defaultTheme)
//     ? Object.assign(variableColors.common, variableColors.text)
//     : defaultTheme;
//   matchUtilities(
//     {
//       placeholder: (value): any => {
//         return {
//           "&::placeholder": {
//             color: value,
//           },
//         };
//       },
//     },
//     {
//       values: flattenColorPalette(colorsTheme),
//       type: ["color", "any"],
//     },
//   );
//   // addUtilities({
//   // 	...createValue(flattenColorPalette(colorsTheme), '::caret', 'caretColor'),
//   // });
// };
