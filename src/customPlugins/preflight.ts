import type { PluginCreator } from "tailwindcss/types/config";

export const preflight: PluginCreator = ({ addBase }) => {
  addBase({
    page: {
      width: "100%",
      height: "100%",
      "line-height": "1.25",
      "box-sizing": "border-box",
      "text-size-adjust": "100%",
      "font-family":
        `"fontFamily.sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      padding:
        `env(safe-area-inset-top, 0px)   env(safe-area-inset-right, 0px)  env(safe-area-inset-bottom, 0px)   env(safe-area-inset-left, 0px)`,
    },
    "page,view,image,i,icon,[class],text,::before,::after": {
      "box-sizing": "border-box",
      "border-width": "0",
      "border-style": "solid",
      "border-color": "currentColor",
    },
    "::before,::after,::backdrop": {
      "--tw-border-spacing-x": "0",
      "--tw-border-spacing-y": "0",
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      "--tw-pan-x": "",
      "--tw-pan-y": "",
      "--tw-pinch-zoom": "",
      "--tw-scroll-snap-strictness": "proximity",
      "--tw-gradient-from-position": "",
      "--tw-gradient-via-position": "",
      "--tw-gradient-to-position": "",
      "--tw-ordinal": "",
      "--tw-slashed-zero": "",
      "--tw-numeric-figure": "",
      "--tw-numeric-spacing": "",
      "--tw-numeric-fraction": "",
      "--tw-ring-inset": "",
      "--tw-ring-offset-width": "6rpx",
      "--tw-ring-offset-color": "#fff",
      "--tw-ring-color": "rgb(59 130 246 / 0.5)",
      "--tw-ring-offset-shadow": "0 0 #0000",
      "--tw-ring-shadow": "0 0 #0000",
      "--tw-shadow": "0 0 #0000",
      "--tw-shadow-colored": "0 0 #0000",
      "--tw-blur": "",
      "--tw-brightness": "",
      "--tw-contrast": "",
      "--tw-grayscale": "",
      "--tw-hue-rotate": "",
      "--tw-invert": "",
      "--tw-saturate": "",
      "--tw-sepia": "",
      "--tw-drop-shadow": "",
      "--tw-backdrop-blur": "",
      "--tw-backdrop-brightness": "",
      "--tw-backdrop-contrast": "",
      "--tw-backdrop-grayscale": "",
      "--tw-backdrop-hue-rotate": "",
      "--tw-backdrop-invert": "",
      "--tw-backdrop-opacity": "",
      "--tw-backdrop-saturate": "",
      "--tw-backdrop-sepia": "",
    },
  });
};
