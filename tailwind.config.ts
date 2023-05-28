import type { Config } from 'tailwindcss';
import { preset } from './index';
export default {
	content: [
		'./miniprogram/components/**.*.{wxml,js,ts}',
		'./miniprogram/pages/**/*.{wxml,js,ts}',
	],
	presets: [preset],
} satisfies Config;
