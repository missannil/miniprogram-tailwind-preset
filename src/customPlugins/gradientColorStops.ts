import type { PluginCreator } from "tailwindcss/types/config";
import { flattenColorPalette } from "../utils/flattenColorPalette";
import { toColorValue } from "../utils/toColorValue";
import { withAlphaValue } from "../utils/withAlphaVariable";

export const gradientColorStops: PluginCreator = (() => {
  // @ts-ignore
  function transparentTo(value) {
    return withAlphaValue(value, 0, "rgb(255 255 255 / 0)");
  }

  return function({ matchUtilities, theme }) {
    let options = {
      values: flattenColorPalette(theme("gradientColorStops")),
      type: ["color", "any"],
    };

    let positionOptions = {
      values: theme("gradientColorStopPositions"),
      type: ["length", "percentage"],
    };

    matchUtilities(
      {
        from: (value) => {
          let transparentToValue = transparentTo(value);

          return {
            "@defaults gradient-color-stops": {},
            "--tw-gradient-from": `${toColorValue(value)} var(--tw-gradient-from-position)`,
            "--tw-gradient-to": `${transparentToValue} var(--tw-gradient-to-position)`,
            "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)`,
          };
        },
      },
      // @ts-ignore
      options,
    );

    matchUtilities(
      {
        from: (value) => {
          return {
            "--tw-gradient-from-position": value,
          };
        },
      },
      // @ts-ignore
      positionOptions,
    );

    matchUtilities(
      {
        via: (value) => {
          let transparentToValue = transparentTo(value);

          return {
            "@defaults gradient-color-stops": {},
            "--tw-gradient-to": `${transparentToValue}  var(--tw-gradient-to-position)`,
            "--tw-gradient-stops": `var(--tw-gradient-from), ${
              toColorValue(
                value,
              )
            } var(--tw-gradient-via-position), var(--tw-gradient-to)`,
          };
        },
      },
      // @ts-ignore
      options,
    );

    matchUtilities(
      {
        via: (value) => {
          return {
            "--tw-gradient-via-position": value,
          };
        },
      },
      // @ts-ignore
      positionOptions,
    );

    matchUtilities(
      {
        to: (value) => ({
          "@defaults gradient-color-stops": {},
          "--tw-gradient-to": `${toColorValue(value)} var(--tw-gradient-to-position)`,
        }),
      },
      // @ts-ignore
      options,
    );

    matchUtilities(
      {
        to: (value) => {
          return {
            "--tw-gradient-to-position": value,
          };
        },
      },
      // @ts-ignore
      positionOptions,
    );
  };
})();
