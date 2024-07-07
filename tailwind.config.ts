import type { Config } from "tailwindcss";
import { preset } from "./src";
export default {
  content: ["./test/demo.wxml"],
  presets: [preset],
} satisfies Config;
