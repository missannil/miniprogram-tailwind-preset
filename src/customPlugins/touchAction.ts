import type { PluginCreator } from "tailwindcss/types/config";
export const touchAction: PluginCreator = ({ addUtilities }) => {
  let cssTouchActionValue = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";

  addUtilities({
    ".touch-auto": { "touch-action": "auto" },
    ".touch-none": { "touch-action": "none" },
    ".touch-pan-x": {
      "@defaults touch-action": {},
      "--tw-pan-x": "pan-x",
      "touch-action": cssTouchActionValue,
    },
    ".touch-pan-left": {
      "@defaults touch-action": {},
      "--tw-pan-x": "pan-left",
      "touch-action": cssTouchActionValue,
    },
    ".touch-pan-right": {
      "@defaults touch-action": {},
      "--tw-pan-x": "pan-right",
      "touch-action": cssTouchActionValue,
    },
    ".touch-pan-y": {
      "@defaults touch-action": {},
      "--tw-pan-y": "pan-y",
      "touch-action": cssTouchActionValue,
    },
    ".touch-pan-up": {
      "@defaults touch-action": {},
      "--tw-pan-y": "pan-up",
      "touch-action": cssTouchActionValue,
    },
    ".touch-pan-down": {
      "@defaults touch-action": {},
      "--tw-pan-y": "pan-down",
      "touch-action": cssTouchActionValue,
    },
    ".touch-pinch-zoom": {
      "@defaults touch-action": {},
      "--tw-pinch-zoom": "pinch-zoom",
      "touch-action": cssTouchActionValue,
    },
    ".touch-manipulation": { "touch-action": "manipulation" },
  });
};
