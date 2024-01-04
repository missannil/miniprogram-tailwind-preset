import type { Config } from "tailwindcss";
import { preset } from "./src";
export default {
  content: ["demo.wxml"],
  presets: [preset],
} satisfies Config;
